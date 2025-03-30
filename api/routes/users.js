const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// update
router.put("/:id", async (req,res) => {
    if(req.body.userId === req.params.id || req.user.IsAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch (err){
                return res.status(500).json(err);
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body, 
            });
            res.status(200).json("Account has been updated");
        }catch (err){
            return res.status(500).json(err) 
        }

    }else{
        return res.status(403).json("You can update only your account");
    }
});

// delete

router.delete("/:id", async (req,res) => {
    if(req.body.userId === req.params.id || req.body.IsAdmin) {
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted");
        }catch (err){
            return res.status(500).json(err) 
        }

    }else{
        return res.status(403).json("You can delete only your account");
    }
});

// get a User
// lh:8800/users?userId=6547657
// lh:8800/users?username=John

router.get("/", async (req,res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try{
        const user = userId ? await User.findById(userId):
                              await User.findOne ({username:username});
        const {password, updatedAt, ...others}= user._doc
       
        res.status(200).json(others);
    }catch (err){
        return res.status(500).json(err) 
    }
});

// follow a User
router.put("/:id/follow", async(req,res)=>{
    if (req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            
            if (!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers:req.body.userId}})
                await currentUser.updateOne({$push:{followings:req.params.id}})
                res.status(200).json("user has been followed")
            }else{
                res.status(403).json("you already follow this user")  
            }

        }catch(err){
            res.status(500).json(err)
        }

    }else{
        res.status(403).json("you can't follow yourself")
    }

})
// unfollow a User
router.put("/:id/unfollow", async(req,res)=>{
    if (req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            
            if (user.followers.includes(req.body.userId)){
                await user.updateOne({$pull:{followers:req.body.userId}})
                await currentUser.updateOne({$pull:{followings:req.params.id}})
                res.status(200).json("user has been followed")
            }else{
                res.status(403).json("you don't unfollow this user")  
            }

        }catch(err){
            res.status(500).json(err)
        }

    }else{
        res.status(403).json("you can't follow yourself")
    }

})
// use router in index.js
module.exports= router