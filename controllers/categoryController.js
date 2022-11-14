const Category = require("../models/categoryServices");

exports.categoryCreate = async(req, res)=> {
  try {
    const categoryName = await Category.create({ name:`${req.body.categoryName}`});
    console.log(categoryName);
    res.status(200).send(categoryName);
  } catch (e) {
    res.status(409).send(e.message);
  }
}





