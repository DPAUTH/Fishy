const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require("bcrypt");



//REGISTER
router.post("/register", async (request, response) => {
    try {
      //generate new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(request.body.password, salt);
  
      //create new user
      const newUser = new User({
        username: request.body.username,
        email: request.body.email,
        password: hashedPassword,
      });
  
      //save user and respond
      const user = await newUser.save();
      response.status(200).json(user); // Done successfully
    } catch (err) {
      response.status(500).json(err) // Server side error
    }
  });



//LOGIN
router.post("/login", async (request, response) => {
  try {
    const user = await User.findOne({ email: request.body.email });
    !user && response.status(404).json("user not found"); // If there is no such user in databse returns error

    const validPassword = await bcrypt.compare(request.body.password, user.password) // Ckecks if password is valid
    !validPassword && response.status(400).json("wrong password") // Indicates that user has entered wrong password

    response.status(200).json(user)
  } catch (err) {
    response.status(500).json(err)
  }
});

// To be able to use it in the app.js file
module.exports = router;
