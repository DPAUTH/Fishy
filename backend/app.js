const express = require('express');
const app = express(); //Invoke express
const morgan = require('morgan'); // For middleware
const mongoose = require('mongoose'); // For ...s
const helmet = require('helmet');
const dotenv = require('dotenv'); // For updating instantly any changes made to backed

const userRoute = require('./routes/users'); // The path for getting the users
const authRoute = require('./routes/auth'); // The path for getting the users
const postRoute = require("./routes/posts");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
  );

// // Bring in routes
// const { getPosts } = require('./routes/post') // This indicates what we want to require from the route ./routes/post
// // Middleware
// app.use(morgan("dev"));
// // To use get method with express
// app.get("/", getPosts);
// const port = 8080;
// app.listen(port, () => {console.log(`A Node JS API is listening on port: ${port}`)});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

// API calls
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use("/api/posts", postRoute);

app.get("/", (req,res)=>{
    res.send("WELCOME")
});


app.listen(8080,()=>{
    console.log("Backend server is running")
}); 