const mongoose = require("mongoose");
const schema = mongoose.Schema;


const inventorySchema = new schema({
    itemName:{
        type:String
    },
    description:{
        type:String,
        minLength:8,
        maxLength:50,
        required:true,
    },
    Category:{ type: schema.Types.ObjectId, ref: 'Category' },
    noInStock:{
        type:Number,
        min:0,
        max:1000
    },
    status:{
        type:String,
        require:true,
        enum:["Available", "out of stock", "unavailable"]
    },
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

module.exports = mongoose.model("Inventory", inventorySchema);