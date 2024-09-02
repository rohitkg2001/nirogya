const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema(
  {
    totalSales: {
      type: Number,
      required: true,
    },
    totalOrders: {
      type: Number,
      required: true,
    },
    totalProducts: {
      type: Number,
      required: true,
    },
    totalUsers: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Dashboard = mongoose.model("Dashboard", dashboardSchema);

module.exports = Dashboard;
