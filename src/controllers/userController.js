const User=require("../models/User");

const registeruser=async(req,res)=>{
  try{
    const {name,email,password,role}=req.body;

    const exist=await User.findOne({email});
    if(exist){
      return res.status(400).json({message:"User already exists"});
    }

    const newUser=new User({name,email,password,role});
    const saved=await newUser.save();

    res.status(201).json({
      message:"User registered",
      user:saved
    });

  }catch(err){
    res.status(500).json({message:"Server error",error:err.message});
  }
};

module.exports={registeruser};