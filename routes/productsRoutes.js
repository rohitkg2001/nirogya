const {
  createProduct,
  getProduct,
  getProductByID,
  deleteProductById,
  deleteManyProducts,
  updateProductById,
  uploadImage,
} = require("../api/products");
const { upload } = require("../middleware/imageUploader");
const router = require("express").Router();

router.post("/create-product", createProduct);
router.get("/get-products/", getProduct);
router.get("/get-product/:product_id", getProductByID);
router.delete("/delete-product/:product_id", deleteProductById);
router.delete("/delete-many-products", deleteManyProducts);
router.put("/update-product/:product_id", updateProductById);
router.post("/upload-image/:id", upload.single("product_image"), uploadImage);

module.exports = router;
