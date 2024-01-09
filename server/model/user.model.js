import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    email:{
        type:String,
    },
    email_verified:{
        type:String,
    },
    family_name:{
        type:String,
    },
    given_name:{
        type:String,
    },
    locale:{
        type:String,
    },
    name:{
        type:String,
    },
    picture:{
        type:String,
    },
    sub:{
        type:String,
    },
});

const User = mongoose.model('User' , userSchema)

export default User