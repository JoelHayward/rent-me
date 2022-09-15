const express = require("express");
const Listing = require("../models/listings");
const router = express.Router();

//get a list of rental properties from the database
router.get("/rentals", function (req, res) {
  Listing.find({}).then(function(sample_airbnb){
    res.send(sample_airbnb)
  })
});

// //add new property to the database
// router.post("/rentals", function (req, res) {
//   Listing.create(req.body).then(function (lisitng) {
//     res.send(lisitng);
//   });
// });

// //update a property in the database
// router.put("/rentals/:id", function (req, res) {
//   res.send({ type: "PUT" });
// });

// //delete a property from the database
// router.delete("/rentals/:id", function (req, res) {
//   res.send({ type: "DELETE" });
// });

module.exports = router;
