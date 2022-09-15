const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create listing schema and model

const listingSchema = new Schema({
  name:String,
description:String,
property_type:String,
room_type:String,
accommodates:String,
bedrooms:String,
beds:String,
bathrooms:String,
price:String,
//add in geolocation

})

const Listing = mongoose.model('sample_airbnb.listingsAndReviews', listingSchema)

module.exports = Listing;