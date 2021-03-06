//Require Mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plantModelSchema = new Schema({
  name: { type: String, required: true },
  wateringInterval: { type: Number, required: true },
  wateringWindow: { type: Number, required: true },
  watered: [String],
});

module.exports = mongoose.model("Plants", plantModelSchema);
