const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path"); // Add this line to use the 'path' module.

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Load user data from a JSON file (you should use a database in a production app)
const users = JSON.parse(fs.readFileSync("users.json", "utf8"));
const hotels = JSON.parse(fs.readFileSync("hotels.json", "utf8"));
const guides = JSON.parse(fs.readFileSync("guides.json", "utf8"));
// Serve static files (CSS and client-side JavaScript)
app.use(express.static(path.join(__dirname, "public")));
app.use("/styles", express.static(path.join(__dirname, "styles"))); // Serve stylesheets

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Rest of your routes...
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  
  if (!user || !bcrypt.compareSync(password, user.password)) {
    res.status(401).send("Invalid email or password");
  } else {
    res.status(200).send("Login successful");
  }
});

app.post("/signup", (req, res) => {
  const { name, address, nationality, gender, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  
  // Check if the email is already registered
  if (users.find((u) => u.email === email)) {
    res.status(400).send("Email already in use");
  } else {
    // Add the new user to the users array (you should update this to use a database)
    users.push({
      name,
      address,
      nationality,
      gender,
      email,
      password: hashedPassword,
    });
    // Save the updated user data to the JSON file
    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
    
    res.status(200).send("Signup successful");
  }
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});
app.get("/loginhotel", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login2.html"));
});
app.post("/loginhotel", (req, res) => {
  const { email, password } = req.body;
  const user = hotels.find((u) => u.email === email);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    res.status(401).send("Invalid email or password");
  } else {
    res.status(200).send("Login successful");
  }
});

app.post("/signuphotel", (req, res) => {
  const { hotelname, ownername, address, gst, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Check if the email is already registered
  if (hotels.find((u) => u.email === email)) {
    res.status(400).send("Email already in use");
  } else {
    // Add the new user to the users array (you should update this to use a database)
    hotels.push({
      hotelname,
      ownername,
      address,
      gst,
      email,
      password: hashedPassword,
    });

    // Save the updated user data to the JSON file
    fs.writeFileSync("hotels.json", JSON.stringify(hotels, null, 2));

    res.status(200).send("Signup successful");
  }
});
// app.get("/", (req, res) => {
//   res.send("Welcome to the home page");
// });
app.get("/loginguide", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login3.html"));
});
app.post("/loginguide", (req, res) => {
  const { email, password } = req.body;
  const user = guides.find((u) => u.email === email);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    res.status(401).send("Invalid email or password");
  } else {
    res.status(200).send("Login successful");
  }
});

app.post("/signupguide", (req, res) => {
  const { name, license, experience, gender, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Check if the email is already registered
  if (guides.find((u) => u.email === email)) {
    res.status(400).send("Email already in use");
  } else {
    // Add the new user to the users array (you should update this to use a database)
    guides.push({
      name,
      license,
      experience,
      gender,
      email,
      password: hashedPassword,
    });

    // Save the updated user data to the JSON file
    fs.writeFileSync("guides.json", JSON.stringify(guides, null, 2));

    res.status(200).send("Signup successful");
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

