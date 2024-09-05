const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: Number,
    title: {
      type: String,
      minLength: 5,
      maxLength: 100,
      required: true,
    },
    description: String,
    category: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: {
      type: Number,
      required: [true, "Number of stocks is required"],
      min: [0, "Stock Quantity cannot be negative"],
      max: [100, "Please dont waste your hard earned money"],
    },
    tags: Array,
    // {
    //   type: String,
    //   enum: ["Shampoo", ""],
    //   message: "{VALUE} we not selling right now. Please contact admin",
    // }
    brand: String,
    sku: String,
    weight: Number,
    dimensions: Object,
    shippingInformation: String,
    availabilityStatus: String,//TODO:Enum of available, not available, low stock
    reviews: Array,//TODO: {rating:Number, comment:String,date:Date, reviewerName:String, reviewerEmail:String, reviewerPhone:String}
    returnPolicy: String,
    refundPolicy: String,
    minimumOrderQuantity: Number,
    meta: Object,
    media: Array,
    thumbnail: String,
    status: Boolean,
    total_wish: Number,
    total_sales: Number,
    sale_price: Number,
    sale_from: { type: Date, min: Date.now() },
    sale_to: Date,
    available_from: { type: Date, min: Date.now() },
    available_to: Date,
    featured: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
