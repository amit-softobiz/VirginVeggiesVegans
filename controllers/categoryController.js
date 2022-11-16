const Category    = require("../models/categoryServices")
      mongoose    = require("mongoose");

exports.categoryCreate = async (req, res) => {
  try {
    const category_create = await Category.create({ name: `${req.body.categoryName}`, description: `${req.body.categoryDescription}` });
    res.status(200).send(category_create);
  } catch (e) {
    res.status(404).send(e.message);
  }
}

exports.categoryGet = async (req, res) => {
  try {
    const category_get = await Category.find({});
    res.status(200).render("category_list", { categoryget: category_get })
  } catch (e) {
    res.status(404).send(e.message);
  }
}

exports.categorydelete = async (req, res) => {
  try {
    let id = req.params.id;
    const category_delete = await Category.deleteOne({ "_id": id });
    res.status(200).send(category_delete);
  } catch (e) {
    res.status(404).send(e.message);
  }
}

exports.categoryupdate = async (req, res) => {
  try {
    let id = mongoose.Types.ObjectId(req.params.id.trim());
    const category_update = await Category.updateOne({ "_id": id }, { name: `${req.body.name}`, description: `${req.body.description}` });
    res.status(200).send(category_update);
   } catch (e) {
    res.status(404).send(e.message);
  }
}



