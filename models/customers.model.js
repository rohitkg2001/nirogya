const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    picture: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["customer", "vip", "premium"],
      default: "customer",
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    registeredNo: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
