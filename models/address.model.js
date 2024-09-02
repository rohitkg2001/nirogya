const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    flat_apartment: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    postal_code: {
      type: String,
      required: true,
    },
    landmark: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
