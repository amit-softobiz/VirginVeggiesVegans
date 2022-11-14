const mongoose = require("mongoose");
const schema = mongoose.Schema;

const addressSchema = new schema({
    street:String,
    city:String
})
const adminSchema = new schema({
    name:String,
    email:{
        type:String,
        minLength:11,
        maxLength:15,
        required:true,
        lowerCase:true
    },
    password:{
        type:String,
        minLength:8,
        maxLength:20
    },
    age:{
        type:Number,
        require:true,
        min:18,
        max:100,
    },
    address:addressSchema,
    createdAt:{
        type:Date,
        immutable :true,
        default:()=>Date.now(),
    },
    updatedAt:{
        type:Date,
        default:()=>Date.now(),
    }
})

module.exports = mongoose.model("Admin", adminSchema);