const Inventory = require("../models/inventoryServices");


exports.inventoryCreate = async (req, res)=>{
        try{
        let itemName =req.body.itemName;
        let description=req.body.description;
        let Category =req.body.Category;
        let price=req.body.price;
        let noInStock=req.body.noInStock;
 
        const inventory = await Inventory.create({itemName:itemName,description:description,Category:Category,price:price,noInStock:noInStock});
       
        res.status(200).send(req.body);
    }catch(e){
        res.status(404).send(e.message);
    }
}

exports.inventoryGet = async(req, res)=>{
    try{
        console.log("inventory get");
        const inventory = await Inventory.find({});
        res.status(200).send(inventory);
    }catch(e){
        res.status(404).send(e.massage);
    }
}