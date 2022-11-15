// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const CategorySchema = new Schema({
//     name:{
//         type:String,
//         //required:true,
//         minLength: 3,
//         maxLength: 100,
//     },
//     description:{
//         type:String,
//         //required:true,
//         minLength: 3,
//         maxLength: 100,
//     },
//     // createdAt: {
//     //     type: Date,
//     //     immutable: true,
//     //     default: () => Date.now(),
//     // },
//     // updatedAt: {
//     //     type: Date,
//     //     default: () => Date.now(),
//     // }
// })
// exports = mongoose.model("Category", CategorySchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
});

CategorySchema.virtual("url").get(function () {
    return `/api/category/${this._id}`;
});

module.exports = mongoose.model("Category", CategorySchema);