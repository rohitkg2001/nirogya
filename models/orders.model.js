const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: Number,
      required: true,
      unique: true,
    },
    customer: {
      type: String,
      ref: "Customer",
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    salePrice: {
      type: Number,
      required: true,
    },
    orderStatus: {
      type: String,
      enum: ["Pending", "completed", "Rejected", "canceled"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["unpaid", "paid", "refunded"],
      default: "unpaid",
    },
    shipping: {
      type: String,
      required: true,
    },
    refund: {
      reason: {
        type: String,
      },
      status: {
        type: String,
        enum: ["refund successful", "refund unsuccessful"],
      },
    },
    quantity: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number, // total amount to be refunded
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
