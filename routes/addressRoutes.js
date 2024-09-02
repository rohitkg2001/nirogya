const {
  createAddress,
  getAddress,
  getAddressByID,
  updateAddressByID,
  deleteAddressByID,
} = require("../api/address");
const router = require("express").Router();

router.post("/create-address", createAddress);
router.get("/get-addresses", getAddress);
router.get("/get-address/:address_id", getAddressByID);
router.put("/update-address/:address_id", updateAddressByID);
router.delete("/delete-address/:address_id", deleteAddressByID);

module.exports = router;
