"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  ingredients: { type: [], required: true },
});

module.exports = mongoose.model("Dish", schema);
