const mongoose = require("mongoose");

const refundSchema = new mongoose.Schema(
  {
    orderId: {
      type: "Number",
      ref: "Order",
      required: true,
    },
    shipping: {
      type: String,
      required: true,
    },
    refund: {
      type: String,
      enum: ["full", "partial"],
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Refund = mongoose.model("Refund", refundSchema);

module.exports = Refund;
