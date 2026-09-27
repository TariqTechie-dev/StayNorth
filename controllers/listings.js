const Listing = require("../models/listing.js");

// render all listings (with optional category filter)
module.exports.index = async (req, res) => {
  const { category } = req.query;
  const validCategories = [
    "trending",
    "rooms",
    "iconic-cities",
    "mountains",
    "castles",
    "amazing-pools",
    "camping",
    "farms",
    "arctic",
    "boats",
  ];

  let filter = {};
  let selectedCategory = "all";
  if (category && validCategories.includes(category)) {
    filter.category = category;
    selectedCategory = category;
  }

  const alllistings = await Listing.find(filter);
  res.render("listings/index.ejs", { alllistings, selectedCategory });
};

//  render new form for listing
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};
//   show detail of listing
module.exports.showListing = async (req, res) => {
  let { id } = req.params;

  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");

  if (!listing) {
    throw new ExpressError("Listing Not Found", 404);
  }

  res.render("listings/show.ejs", { listing });
};
//    create new listing
module.exports.createListing = async (req, res) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const listing = new Listing(req.body.listing);
  listing.owner = req.user._id; // assigning owner to listing through user id which is currently logged in
  listing.image = { url, filename };
  await listing.save();
  req.flash("success", "Listing created successfully");
  res.redirect("/listings");
};
//  render edit form of listing
module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;

  const listing = await Listing.findById(id);

  if (!listing) {
    throw new ExpressError("Listing Not Found", 404);
    res.redirect("/listings");
  }

  let OrignalImageUrl = listing.image.url;
  OrignalImageUrl = OrignalImageUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { listing, OrignalImageUrl });
};
//  update listing
module.exports.updateListing = async (req, res) => {
  let { id } = req.params;

  let listing = await Listing.findByIdAndUpdate(id, req.body.listing, {
    new: true,
    runValidators: true,
  });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing updated successfully");
  res.redirect(`/listings/${id}`);
};

//   delete listing
module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;

  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing deleted successfully");
  res.redirect("/listings");
};
