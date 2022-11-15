const Category = require("../models/categoryServices");

exports.categoryCreate = async(req, res)=> {
  try {
    const categoryName = await Category.create({ name:`${req.body.categoryName}`,description:`${req.body.categoryDescription}`});
    console.log(categoryName);
    res.status(200).send(categoryName);
  } catch (e) {
    res.status(409).send(e.message);
  }
}

exports.categoryGet = async(req, res)=> {
  try {
    const categoryget = await Category.find({});
    // res.status(200).send(categoryget);
    res.render("category_list",{amit:categoryget})
  } catch (e) {
    res.status(409).send(e.message);
  }
}



