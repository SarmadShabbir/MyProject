const User = require("../models/users");

exports.createUser = async (req, res) => {
  console.log(req.body)
  const { userName, Pwd } = req.body;
  try {
    const userExists = await User.findOne({ userName });
    if (userExists) {
      console.log("user Exists")
      res.status(400).json({
        message: "user exists",
      });
    }
    else {
      const user = await User.create({
        userName,
        Pwd,
      });
      res.status(201).json({
        message: "User Has been created",
        Data: user,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
}

exports.validateUser = async (req, res) =>{
    const {userName, Pwd} = req.body;

    try{
      const userName = await User.findOne({userName})
      const userPwd = await User.findOne({Pwd})
      if(!userName && !userPwd){
        res.status(200).json({
          message: "Logged In"
        })
      }
    } catch(err) {
      console.log(err);
      res.status(500).json({
        message: "Server Error!"
      })
    }
  }
