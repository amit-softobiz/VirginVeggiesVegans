const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name       : { type: String, unique:true, required: true},
    description: { type: String, required: true },
});

CategorySchema.virtual("url").get(function () {
    return `/catalog/getParticularInventory/${this._id}`;
});

module.exports = mongoose.model("Category", CategorySchema);