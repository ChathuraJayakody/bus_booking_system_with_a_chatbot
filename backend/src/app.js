const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const busRoutes = require('./routes/busRoutes');
const bookingRoutes = require('./routes/bookingRoutes'); // ✅ ADD THIS

const app = express();

// Global Middleware
app.use(helmet()); // Security
app.use(cors());   // Enable Cross-Origin requests
app.use(morgan('dev')); // Logging
app.use(express.json()); // Body parser

// Routes
app.use('/api/v1/buses', busRoutes);
app.use('/api/bookings', bookingRoutes); // ✅ ADD THIS

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
