import mongoose from 'mongoose';
const email_match =  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/


const userSchema =  mongoose.Schema({
    username:{
        type:String, required:true
    },
    email:{
        type:String, required:true, unique:true, match: email_match
    },
    password:{
        type:String,required:true,select:false
    },

    fullname:{
        type: String
    },

    address:{
        type: String
    },
    image:{
        type: String
    },
    phone: {
        type: String
    },
    role: {
        type: String,
        default: 'user',
    },
    lastLogin: {
        type: Date,
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpire: {
        type: Date
    }

},{timestamps:true});

const User = mongoose.model('User',userSchema);

export { User, userSchema } 