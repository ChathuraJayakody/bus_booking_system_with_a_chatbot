const express = require("express");
const router = express.Router();

const { testBus } = require("../controllers/busController");

// Test route
router.get("/test", testBus);

module.exports = router;
