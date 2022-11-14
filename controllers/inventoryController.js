const Inventory = require("../models/inventoryServices");


exports.inventoryCreate = async(req, res)=>{
    // const [itemName,description,noInStock,status]=req.body;\
    
   let  itemNamee =req.body.itemName;
   let description=req.body.description;
   let noInStock=req.body.noInStock;
   let status=req.body.status;

    try{
        const inventory = await Inventory.create({ itemNamee:req.body, description, noInStock, status});
        res.status(200).send(inventory);
    }catch(e){
        res.status(404).send(e.massage);
    }
}