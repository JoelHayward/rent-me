const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
const router = express.Router();

app.use(cors());

//connect to mongodb


const uri = `mongodb+srv://joel:mongo7zc3e@cluster0.vaoiamm.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("sample_airbnb").collection("listingsAndReviews");
  console.log('DB connected')
  // perform actions on the collection object
  client.close();
});

const agg = [
  {
    $limit: 20
  }
]


app.get("/rentals", async function (req, res){
  try {
    await client.connect();
    // database and collection code goes here
    const coll = client.db("sample_airbnb").collection("listingsAndReviews");
    const cursor = coll.aggregate(agg);
    // find code goes here
    // const cursor = coll.find()
   const data = await cursor.toArray()
   console.log(data)
      res.send(data)
      
    }
 finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
})



app.listen(8080, function () {
  console.log("listening on 8080");
})
