const {
  createUser,
  getUsers,
  getUserByID,
  updateUserByID,
  deleteUserByID,
  uploadImage,
} = require("../api/user");
const { upload } = require("../middleware/imageUploader");
const router = require("express").Router();

router.post("/create-user", createUser);
router.get("/get-users", getUsers);
router.get("/get-user/:user_id", getUserByID);
router.put("/update-user/:user_id", updateUserByID);
router.delete("/delete-user/:user_id", deleteUserByID);
router.post("/upload-image/:id", upload.single("product_image"), uploadImage);

module.exports = router;
