const {
  createCustomer,
  getCustomers,
  getCustomerByID,
  updateCustomerByID,
  deleteCustomerByID,
} = require("../api/customers");
const router = require("express").Router();

router.post("/create-customer", createCustomer);
router.get("/get-customers", getCustomers);
router.get("/get-customer/:customer_id", getCustomerByID);
router.put("/update-customer/:customer_id", updateCustomerByID);
router.delete("/delete-customer/:customer_id", deleteCustomerByID);

module.exports = router;
