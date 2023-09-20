const mongoose = require("mongoose");
const { Schema } = mongoose;

const HotelSchema = new Schema({
  hotelname: {
    type: String,
  },
  adminId: {
    type: String,
    required: true,
  },
  ownername: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileno: {
    type: String,
    required: true,
    unique: true,
  },

  address: {
    type: String,
    required: true,
  },
  licenseno: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const Hotel = mongoose.model("hotel", HotelSchema);
module.exports = Hotel;
