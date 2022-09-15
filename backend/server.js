const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();
const mongoose = require("mongoose");

app.use(cors());

mongoose
  .connect(
    "mongodb+srv://joel:mongo7zc3e@cluster0.vaoiamm.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Database not Connected");
  });

router.route("/Rentals").get((req, res) => {
  listingAndReviews.find().then((foundListing) => res.json(foundListing));
});

app.listen(8080, function () {
  console.log("listening on 8080");
});
