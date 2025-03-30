// to create router
const router = require("express").Router();
const { response } = require("express");
const User = require("../models/User");
// calls bcrypt
const bcrypt= require ("bcrypt");

//Register
router.post("/register",async(req,res)=>{
    
    try{
        // generate new password
        // generate salt
        const salt = await bcrypt.genSalt(10);
        // hash password
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        // generate new user
        const newUser= await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        // save user and respond
        const user = await newUser.save();
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    };
     
});
//Login
router.post("/login",async(req,res)=>{
    try{
        // const user = await User.findOne({email: req.body.email});
        // !user && res.status(404).send("User not found")
        // const validPassword= await bcrypt.compare(req.body.password, user.password)
        // !validPassword && res.status(400).json("Wrong password!")

        const user = await User.findOne({ email: req.body.email });
        if(!user) return res.status(404).json("User not found");
    
        const validated = await bcrypt.compare(req.body.password, user.password);
        if(!validated) return res.status(404).json("Wrong password");
        
        res.status(200).json(user)
    }catch (err) {
        res.status(500).json(err)
    }
});

// use router in index.js
module.exports= router