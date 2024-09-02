const {
  createVendor,
  getVendors,
  getVendorByID,
  updateVendorByID,
  deleteVendorByID,
} = require("../api/vendors");
const router = require("express").Router();

router.post("/create-vendor", createVendor);
router.get("/get-vendors", getVendors);
router.get("/get-vendor/:vendor_id", getVendorByID);
router.put("/update-vendor/:vendor_id", updateVendorByID);
router.delete("/delete-vendor/:vendor_id", deleteVendorByID);

module.exports = router;
