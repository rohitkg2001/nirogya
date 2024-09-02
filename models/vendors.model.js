const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
  {
    logo: {
      type: String, 
    },
    vendorname: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Vendor = mongoose.model("Vendors", vendorSchema);

module.exports = Vendor;
