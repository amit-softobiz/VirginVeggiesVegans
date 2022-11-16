const express              = require("express")
      categoryController   = require("../controllers/categoryController")
      inventoryController  = require("../controllers/inventoryController");

const router = express.Router();
router.get("/categoryForm");
router.get("/getParticularInventory/:id",categoryController.categoryGetbyid);

router.post("/createCategory", categoryController.categoryCreate)
      .put("/updateCategory/:id", categoryController.categoryupdate)
      .delete("/deleteCategory/:id", categoryController.categorydelete)
      .get("/getCategory", categoryController.categoryGet)

      .post("/createInventoryy/:id", inventoryController.inventoryCreate)
      .put("/updateInventoryy/:id", inventoryController.inventoryUpdateById)
      .delete("/deleteInventoryy/:id", inventoryController.inventoryDeleteById)
      .get("/getInventory", inventoryController.inventoryGet)
      .get("/getInventory/:id", inventoryController.inventoryGetById);

     


module.exports = router;