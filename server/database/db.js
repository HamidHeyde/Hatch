const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
  const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.e3pka.mongodb.net/hatch`;

  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on("connected", () => {
    console.log("Database connected Successfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });

  mongoose.connection.on("error",  console.error.bind(console, "connection error: "));
};

module.exports = Connection;
