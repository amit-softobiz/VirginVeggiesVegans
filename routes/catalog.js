const express            = require("express");
const adminController    = require("../controllers/adminControllers");
const categoryController = require("../controllers/categoryController");
const inventoryController = require("../controllers/inventoryController")

const router             = express.Router();

router.post("/createAdmin", adminController.adminCreate);
router.get("/createfind", adminController.adminFind);
router.post("/createCategory", categoryController.categoryCreate);
router.post("/createInventory", inventoryController.inventoryCreate);

module.exports = router;