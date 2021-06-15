const User = require('../models/user')
const router = require('express').Router();
const bcrypt = require("bcrypt");

//UPDATE USER
router.put("/:id", async (request, response) => {
    // Check who the user is
    if (request.body.userId === request.params.id || request.body.isAdmin) {
      if (request.body.password) { // when user tries to change his password
        try {
          const salt = await bcrypt.genSalt(10);
          request.body.password = await bcrypt.hash(request.body.password, salt); //update request
        } catch (err) {
          return response.status(500).json(err);
        }
      }
      try {
        const user = await User.findByIdAndUpdate(request.params.id, { // request.params.id, gets user id
          $set: request.body, // automatically sets all inputs in this body
        });
        response.status(200).json("Account has been updated");
      } catch (err) {
        return response.status(500).json(err);
      }
    } else {
      return response.status(403).json("You can update only your account!");
    }
  });
  
  //DELETE USER
  router.delete("/:id", async (request, response) => {
    if (request.body.userId === request.params.id || request.body.isAdmin) {
      try {
        await User.findByIdAndDelete(request.params.id);
        response.status(200).json("Account has been deleted");
      } catch (err) {
        return response.status(500).json(err);
      }
    } else {
      return response.status(403).json("You can delete only your account!");
    }
  });
  
  //GET A USER
  router.get("/:id", async (request, response) => {
    try {
      const user = await User.findById(request.params.id);
      const { password, updatedAt, ...other } = user._doc;
      response.status(200).json(other);
    } catch (err) {
      response.status(500).json(err);
    }
  });


// We use this router to update and get info about the users
router.get('/',(request,response)=> {
    response.send("hey it's user routes");
})


// To be able to use it in the app.js file
module.exports = router