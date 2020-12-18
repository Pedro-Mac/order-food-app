"use strict";
const { Router } = require("express");

const Dish = require("../models/dishItem");
const router = new Router();

router.get("/dishes", async (req, res, next) => {
  try {
    const dishList = await Dish.find();

    res.json({ dishList });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
