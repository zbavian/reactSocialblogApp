// call mongoose
const mongoose = require("mongoose");
// build userSchema
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 3,
            max: 20,
            unique: true
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            require: true,
            min: 6
        },
        profilepicture: {
            type: String,
            default: ""
        },
        coverpicture: {
            type: String,
            default: ""
        },
        followers: {
            type: Array,
            default: []
        },
        followings: {
            type: Array,
            default: []
        },
        IsAdmin: {
            type: Boolean,
            default:false
        },
      
        Desc: {
            type: String,
            max: 50,
        },
        city: {
            type: String,
            max: 50,
        },
        from: {
            type: String,
            max: 50,
        },
        relationship: {
            type: Number,
            enum: [1, 2, 3],
        }
    },
    {timestamps:true}
);
module.exports = mongoose.model("User", UserSchema);
