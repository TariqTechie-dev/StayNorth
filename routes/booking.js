const express = require("express");
const router = express.Router();
const wrapAsync = require("../Utils/WrapAsync.js");
const {
  isLoggedIn,
  validateBooking,
  isBookingGuest,
} = require("../middleware.js");
const bookingController = require("../controllers/bookings.js");

router.post(
  "/listings/:id/bookings",
  isLoggedIn,
  validateBooking,
  wrapAsync(bookingController.createBooking),
);
router.get("/bookings", isLoggedIn, wrapAsync(bookingController.myTrips));
router.get("/bookings/manage", isLoggedIn, wrapAsync(bookingController.manageBookings));
router.post(
  "/bookings/:bookingId/cancel",
  isLoggedIn,
  isBookingGuest,
  wrapAsync(bookingController.cancelBooking),
);

module.exports = router;