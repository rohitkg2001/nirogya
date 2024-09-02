const {
  createOrder,
  getOrders,
  getOrderByID,
  updateOrderByID,
  deleteOrderByID,
} = require("../api/orders");
const router = require("express").Router();

router.post("/create-order", createOrder);
router.get("/get-orders", getOrders);
router.get("/get-order/:order_id", getOrderByID);
router.put("/update-order/:order_id", updateOrderByID);
router.delete("/delete-order/:order_id", deleteOrderByID);

module.exports = router;
