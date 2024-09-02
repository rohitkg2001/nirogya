const Refund = require("../models/refund.model");

module.exports.createRefund = async (req, res) => {
  try {
    const refund = new Refund(req.body);
    await refund.save();
    res.status(201).send(refund);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.getRefunds = async (req, res) => {
  try {
    const refunds = await Refund.find().populate("orderId");
    if (refunds.length < 1) {
      return res.status(404).send({ message: "No refunds found" });
    }
    res.status(200).send(refunds);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.getRefundByID = async (req, res) => {
  try {
    const refund = await Refund.findById(req.params.refund_id).populate(
      "orderId"
    );
    if (!refund) {
      return res.status(404).send({ message: "Refund not found" });
    }
    res.status(200).send(refund);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.updateRefundByID = async (req, res) => {
  try {
    const refund = await Refund.findByIdAndUpdate(
      req.params.refund_id,
      req.body,
      {
        new: true,
      }
    ).populate("orderId");
    res.status(200).send(refund);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.deleteRefundByID = async (req, res) => {
  try {
    const refund = await Refund.findByIdAndDelete(req.params.refund_id);
    res.status(200).send(refund);
  } catch (err) {
    res.status(500).send(err);
  }
};
