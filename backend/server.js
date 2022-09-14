const express = require("express");
const app = express();
// const cors = require("cors");
// const asyncHandler = require('express-async-handler')
// const router = express.Router()

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(
      `mongodb+srv://joel:mongo7zc3e@cluster0.vaoiamm.mongodb.net/?retryWrites=true&w=majority`,
      {useNewUrlParser: true}
    );
    console.log(`Database connected : ${con.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

const Schema = mongoose.Schema;
const PropertiesSchema = new Schema({
  id: String,
  name: String,
  location: String,
  suburb: String,
  property_type: String,
  rooms: String,
  bathrooms: String,
  rent: String,
});

const properties = mongoose.model("properties", PropertiesSchema);

const data = {
  id: "",
  name: "House Four",
  location: "Auckland",
  suburb: "Birkenhead",
  property_type: "house",
  rooms: "3",
  bathrooms: "3",
  rent: "570",
};

const newProperties = new properties(data);

// newProperties.save((error) => {
//   if (error) {
//     console.log("Oooops, something happened");
//   } else {
//     console.log("Data has been saved");
//   }
// });

app.get('/api', (req,res) => {
  properties.find({ })
  .then((data) => {
console.log('Data:', data)
res.json(data)
  })
  .catch((error) => {
    console.log('error: ', daerrorta)
  })
  
  
})

app.listen(8080, function () {
  console.log("listening on 8080");
});
