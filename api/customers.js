const Customer = require("../models/customers.model");

module.exports.createCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).send(customer);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    if (customers.length < 1) {
      return res.status(404).send({ message: "No customers found" });
    }
    res.status(200).send(customers);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.getCustomerByID = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.customer_id);
    if (!customer) {
      return res.status(404).send({ message: "Customer not found" });
    }
    res.status(200).send(customer);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.updateCustomerByID = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.customer_id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send(customer);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.deleteCustomerByID = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.customer_id);
    res.status(200).send(customer);
  } catch (err) {
    res.status(500).send(err);
  }
};
