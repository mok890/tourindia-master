const mongoose = require("mongoose");
const { Schema } = mongoose;

const GuideSchema = new Schema({
  name: {
    type: String,
  },
  adminId: {
    type: String,
    required: true,
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
  experience: {
    type: String,
    required: true,
  },
  gender: {
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
const Guide = mongoose.model("guide", GuideSchema);
module.exports = Guide;
