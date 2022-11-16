const Inventory = require("../models/inventoryServices")
      mongoose  = require("mongoose");


exports.inventoryCreate = async (req, res) => {
    try {
        let itemName    = req.body.itemName;
        let description = req.body.description;
        let Category    = mongoose.Types.ObjectId(req.params.id.trim());
        let price       = req.body.price;
        let noInStock   = req.body.noInStock;
        const inventorycreate = await Inventory.create({ itemName: itemName, description: description, Category: Category, price: price, noInStock: noInStock });
        res.status(200).send(inventorycreate);
    } catch (e) {
        res.status(404).send(e.message);
    }
}

exports.inventoryGet = async (req, res) => {
    try {
        const inventoryget = await Inventory.find({});
        res.status(200).render("inventory_list", { inventoryget });
    } catch (e) {
        res.status(404).send(e.massage);
    }
}

exports.inventoryGetById = async (req, res) => {
    try {
        let id = req.params.id;
        const inventorygetbyid = await Inventory.where({ "_id": id });
        res.status(200).send(inventorygetbyid);
    } catch (e) {
        res.status(404).send(e.massage);
    }
}
exports.inventoryUpdateById = async (req, res) => {
    try {
        let itemName    = req.body.itemName;
        let description = req.body.description;
        let Category    = mongoose.Types.ObjectId(req.params.id.trim());
        let price       = req.body.price;
        let noInStock   = req.body.noInStock;
        const inventoryupdatebyid = await Inventory.updateOne({ "_id": Category }, { itemName: itemName, description: description, price: price, noInStock: noInStock });
        res.status(200).send(inventoryupdatebyid);
    } catch (e) {
        res.status(404).send(e.massage);
    }
}

exports.inventoryDeleteById = async (req, res) => {
    try {
        let id = req.params.id;
        const inventorydelete = await Inventory.deleteOne({ "_id": id });
        res.status(200).send(inventorydelete);
    } catch (e) {
        res.status(404).send(e.massage);
    }
}