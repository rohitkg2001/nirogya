

const express = require("express");
const { getDashboardMetrics } = require("../api/dashboard");

const router = express.Router();

// Route to get the dashboard metrics
router.get("/dashboard-metrics", getDashboardMetrics);


module.exports = router;
