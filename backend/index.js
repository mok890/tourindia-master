const connectToMongo = require('./db');

const express = require('express');
var cors = require('cors') 

connectToMongo();
const app = express()
const port = 5000

app.use(express.static("public"));
app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.set("view engine", "ejs");

// Define a route to render the EJS file
app.get("/", (req, res) => {
  // Render the "index.ejs" file in the "views" directory
  res.render("index");
});

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})