const express = require("express");
const app = express();
const cors = require("cors");
import connectDB from './server/db.js'

connectDB()




app.listen(3000, function() {
  console.log('listening on 3000')
})