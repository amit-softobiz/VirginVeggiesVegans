const express            = require("express");
const categoryController = require("../controllers/categoryController");
const inventoryController = require("../controllers/inventoryController")

const router             = express.Router();
router.post("/createInventory", inventoryController.inventoryCreate);
router.post("/createCategory", categoryController.categoryCreate);

router.get("/getCategory", categoryController.categoryGet);
router.get("/getInventory", inventoryController.inventoryGet);


module.exports = router;