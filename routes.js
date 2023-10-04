const router = require("express").Router();
const productController = require("./controller")

router.get("/",productController.product_all);
router.post("/", productController.product_create);
router.put("/:productId", productController.product_update);
router.delete("/:productId", productController.product_delete);

module.exports = router;