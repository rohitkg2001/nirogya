const Order = require("../models/orders.model");
const Product = require("../models/products.model");
const User = require("../models/user.model");

module.exports.getDashboardMetrics = async (req, res) => {
  try {
    // Calculate total sales by summing up the salePrice of all orders
    const totalSales = await Order.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$salePrice" },
        },
      },
    ]);

    // Count total orders
    const totalOrders = await Order.countDocuments();

    // Count total products
    const totalProducts = await Product.countDocuments();

    // Count total users
    const totalUsers = await User.countDocuments();

    // Prepare dashboard data
    const dashboardData = {
      totalSales: totalSales[0]?.total || 0,
      totalOrders,
      totalProducts,
      totalUsers,
    };

    // Send the data
    return res.status(200).send(dashboardData);
  } catch (err) {
    return res.status(500).send(err);
  }
};
