const Address = require("../models/address.model");

module.exports.createAddress = async (req, res) => {
  try {
    const address = new Address(req.body);
    await address.save();
    res.status(201).send(address);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.getAddress = async (req, res) => {
  try {
    const addresses = await Address.find();
    if (addresses.length < 1) {
      return res.status(404).send({ message: "No addresses found" });
    }
    res.status(200).send(addresses);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.getAddressByID = async (req, res) => {
  try {
    const address = await Address.findById(req.params.address_id);
    if (!address) {
      return res.status(404).send({ message: "Address not found" });
    }
    res.status(200).send(address);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.updateAddressByID = async (req, res) => {
  try {
    const address = await Address.findByIdAndUpdate(
      req.params.address_id,
      req.body,
      { new: true }
    );
    res.status(200).send(address);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.deleteAddressByID = async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(req.params.address_id);
    res.status(200).send(address);
  } catch (err) {
    res.status(500).send(err);
  }
};
