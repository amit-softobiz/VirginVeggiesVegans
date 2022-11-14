const mongoose = require("mongoose");
const schema = mongoose.Schema;

const categorySchema = new schema({
    categoryName:{
        type:String,
        unique:true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    }
})
exports = mongoose.model("Category", categorySchema);