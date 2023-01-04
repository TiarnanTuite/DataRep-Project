//use express
const express = require("express");
const app = express();
//mongoDB database
const mongoose = require("mongoose");
app.use(express.json());
//used to allow the domain to be used by the main file
const cors = require("cors");
app.use(cors());
//used to encryptpassword
const bcrypt = require("bcrypt");
port = 5000;

//database link
const mongoUrl = "mongodb+srv://admin:admin@cluster0.jykmr2t.mongodb.net/?retryWrites=true&w=majority"

//connect to database
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

//use Schema
require("./userDetails");
const User = mongoose.model("UserInfo");

//send to /register
app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;

  //variable to encrypt password
  const encryption = await bcrypt.hash(password, 10);

  try {
    //if user already exists give back error
    const oldUser = await User.findOne({email});
    if(oldUser){
        return res.send({error: "User Exists" });
    }

    //data that will be on database
    await User.create({
      fname,
      lname,
      email,
      password:encryption,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.listen(port, ()=>{
    console.log("server Connected");
});