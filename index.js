const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productsRoutes");
<<<<<<< HEAD
const vendorRoutes = require("./routes/vendorRoutes");

const reviewRoutes = require("./routes/reviewRoutes");
// const uploads = require('./uploads')
const app = express();
require("dotenv").config();

const { MONGODB_URL, PORT } = process.env;

=======
const addressRoutes = require("./routes/addressRoutes");
const blogsRoutes = require("./routes/blogsRoutes");
const adduserRoutes = require("./routes/userRoutes");
const customersRoutes = require("./routes/customersRoutes");
const vendorsRoutes = require("./routes/vendorsRoutes");
const ordersRoutes = require( "./routes/ordersRoutes" );
const dashboardRoutes = require( "./routes/dashboardRoutes" );
const refundRoutes = require( "./routes/refundRoutes" );

const app = express();
require("dotenv").config();

const { MONGODB_URL, PORT } = process.env;
console.log(MONGODB_URL);
>>>>>>> aa053adb525c8fafa076f3608b83e3e1881ceaef
const port = PORT || 4000;

mongoose
  .connect(MONGODB_URL)
  .then((result) => console.log("Database is connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
<<<<<<< HEAD
app.use("/api/vendors", vendorRoutes);
app.use("/api/review", reviewRoutes);

=======
app.use("/api/address", addressRoutes);
app.use("/api/blogs", blogsRoutes);
app.use("/api/user", adduserRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/vendors", vendorsRoutes);
app.use( "/api/orders", ordersRoutes );
app.use( "/api/dashboard", dashboardRoutes );
app.use( "/api/refund", refundRoutes );
>>>>>>> aa053adb525c8fafa076f3608b83e3e1881ceaef
// app.use('/uploads', uploads)



