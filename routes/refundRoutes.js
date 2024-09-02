const express = require("express");
const {
  createRefund,
  getRefunds,
  getRefundByID,
  updateRefundByID,
  deleteRefundByID,
} = require("../api/refund");

const router = express.Router();


router.post("/create-refund", createRefund);
router.get("/get-refunds", getRefunds);
router.get("/get-refund/:refund_id", getRefundByID);
router.put("/update-refund/:refund_id", updateRefundByID);
router.delete("/delete-refund/:refund_id", deleteRefundByID);

module.exports = router;
