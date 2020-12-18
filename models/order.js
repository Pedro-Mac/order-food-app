"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: { type: String, required: true },
    items: { type: Array, required: true },
    deliveryPrice: { type: Number, required: true },
    itemsPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    deliveryAddress: {
      street: { type: String, required: true },
      buildingNumber: { type: Number, required: true },
      city: { type: String, required: true },
      flatNumber: { type: Number, required: true },
      floor: { type: Number, required: true },
      message: { type: String, maxLength: 300 },
    },
    paymentMethod: { type: String, required: true },
    isPaid: { type: Boolean, required: true, default: false },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email: { type: String },
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Order", schema);
