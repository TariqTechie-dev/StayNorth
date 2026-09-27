const Booking = require("../models/booking.js");
const Listing = require("../models/listing.js");
const ExpressError = require("../Utils/ExpressError.js");

module.exports.myTrips = async (req, res) => {
  const bookings = await Booking.find({ guest: req.user._id })
    .populate("listing")
    .sort({ checkIn: 1 });
  res.render("bookings/my-trips.ejs", { bookings });
};

module.exports.manageBookings = async (req, res) => {
  const myListings = await Listing.find({ owner: req.user._id }).select("_id");
  const bookings = await Booking.find({ listing: { $in: myListings.map((listing) => listing._id) } })
    .populate("listing")
    .populate("guest", "username")
    .sort({ checkIn: 1 });
  res.render("bookings/manage.ejs", { bookings });
};

module.exports.createBooking = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) throw new ExpressError("Listing not found", 404);

  if (listing.owner.equals(req.user._id)) {
    req.flash("error", "You cannot book your own listing");
    return res.redirect(`/listings/${id}`);
  }

  const { checkIn, checkOut, guests } = req.body.booking;
  const inputCheckIn = new Date(checkIn);
  const inputCheckOut = new Date(checkOut);
  if (Number.isNaN(inputCheckIn.getTime()) || Number.isNaN(inputCheckOut.getTime())) {
    req.flash("error", "Please select valid dates");
    return res.redirect(`/listings/${id}`);
  }

  const checkInDate = new Date(Date.UTC(
    inputCheckIn.getUTCFullYear(),
    inputCheckIn.getUTCMonth(),
    inputCheckIn.getUTCDate(),
  ));
  const checkOutDate = new Date(Date.UTC(
    inputCheckOut.getUTCFullYear(),
    inputCheckOut.getUTCMonth(),
    inputCheckOut.getUTCDate(),
  ));
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  if (checkInDate < today || checkOutDate <= checkInDate) {
    req.flash("error", "Please select valid dates");
    return res.redirect(`/listings/${id}`);
  }

  const guestCount = Number(guests);
  if (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 20) {
    req.flash("error", "Please enter a valid number of guests");
    return res.redirect(`/listings/${id}`);
  }

  const overlap = await Booking.findOne({
    listing: id,
    status: "confirmed",
    checkIn: { $lt: checkOutDate },
    checkOut: { $gt: checkInDate },
  });
  if (overlap) {
    req.flash("error", "These dates are already booked. Please try different dates.");
    return res.redirect(`/listings/${id}`);
  }

  const nights = (checkOutDate.getTime() - checkInDate.getTime()) / 86400000;
  const booking = new Booking({
    listing: id,
    guest: req.user._id,
    checkIn: checkInDate,
    checkOut: checkOutDate,
    guests: guestCount,
    totalPrice: nights * listing.price,
  });
  await booking.save();
  req.flash("success", "Booking confirmed! Have a great trip.");
  res.redirect("/bookings");
};

module.exports.cancelBooking = async (req, res) => {
  const { bookingId } = req.params;
  await Booking.findOneAndUpdate(
    { _id: bookingId, guest: req.user._id },
    { status: "cancelled" },
  );
  req.flash("success", "Booking cancelled");
  res.redirect("/bookings");
};