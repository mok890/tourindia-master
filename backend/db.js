const mongoose = require('mongoose');



async function connectToMongo() {
  try {
    await mongoose.connect(
      "mongodb+srv://405Found:MCQyOLOjYARHb2Da@cluster0.hx0xfre.mongodb.net/tourism",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = connectToMongo;