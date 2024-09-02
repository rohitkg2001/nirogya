const mongoose = require("mongoose");
const Vendor = require("./vendor.model");

const productSchema = new mongoose.Schema(
  {
    // hsn_code: {
    //     type: mongoose.Types.UUID,
    //     required: true,
    //     unique: true
    // },
    SKU: String,
    parent_id: String,
    slug: String,
    name: {
      type: String,
      lowercase: true,
      minLength: 5,
      maxLength: 40,
      required: true,
    },
    description: String,
    summary: String,
    // vendor_id: { type: mongoose.Types.ObjectId, ref: Vendor },
    shop_id: String,
    brand_id: String,
    status: Boolean,
    total_wish: Number,
    total_sales: Number,
    regular_price: Number,
    sale_price: Number,
    sale_from: { type: Date, min: Date.now() },
    sale_to: Date,
    available_from: { type: Date, min: Date.now() },
    available_to: Date,
    featured: Boolean,
    total_stocks: {
      type: Number,
      required: [true, "Number of stocks is required"],
      min: [0, "Stock Quantity cannot be negative"],
      max: [100, "Please dont waste your hard earned money"],
    },
    review_count: { type: Number, required: true, default: 0 },
    review_average: {
      type: Number,
      required: true,
      default: 3,
      enum: [3, 4, 5],
    },
    product_type: {
      type: String,
      enum: ["Shampoo"],
      message: "{VALUE} we not selling right now. Please contact admin",
    },
    color: {
      type: String,
      unique: true,
      enum: ["Red", "Blue", "Green", "Yellow", "Black", "White"],
    },
    image_url: String, //path to
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
