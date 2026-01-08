const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

// Routes without auth middleware
router.post('/', bookingController.createBooking);
router.get('/', bookingController.getUserBookings);
router.get('/:id', bookingController.getBookingById);
router.put('/:id', bookingController.updateBookingStatus);
router.delete('/:id', bookingController.cancelBooking);
router.get('/reference/:reference', bookingController.getBookingByReference);

module.exports = router;
