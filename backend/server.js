const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose')
const {MongoClient} = require('mongodb');
const router = express.Router();

app.use(cors());

//connect to mongodb
const url = `mongodb+srv://joel:mongo7zc3e@cluster0.vaoiamm.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);


const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
        // Make the appropriate DB calls
        listDatabases(client);
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

    async function listDatabases(client){
      databasesList = await client.db().admin().listDatabases();
   
      console.log("Databases:");
      databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  };

  


//initialise routes
app.use('/api', require("./routes/api"));


// 'https://data.mongodb-api.com/app/data-siwip/endpoint/data/v1/action/find'

app.listen(8080, function () {
  console.log("listening on 8080");
});
