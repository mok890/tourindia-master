const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'Harryisagoodb$oy';
//ROUTE 1:Entering user credentials
router.post("/register", function(req, res){
    const newUser = new User({
       username: req.body.username,
        password: req.body.password
    });

    newUser.save().then(()=>{
        res.send("secrets");
    }).catch((err)=>{
        console.log(err);
    })
});


// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [

  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username,password });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }``

    // const passwordCompare = await bcrypt.compare(password, user.password);
    // if (!passwordCompare) {
    //   success = false
    //   return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    // }
   
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken })
  

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


});


// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser,  async (req, res) => {

  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    return res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})



module.exports = router