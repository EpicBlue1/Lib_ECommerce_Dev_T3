const express = require("express");
const router = express();
const ordersSchema = require("./models/orders");
const usersSchema = require("./models/users");
const multer = require("multer");
const path = require("path");
const { find } = require("./models/orders");
const bcrypt = require("bcrypt");

//add user
router.post("/api/adduser", (req, res) => {
  const newUser = new usersSchema({
    userName: req.body.userName,
    userEmail: req.body.userEmail,
    ShippingAddress: req.body.ShippingAddress,
    stAddress: req.body.ShippingAddress.stAddress,
    city: req.body.ShippingAddress.city,
    province: req.body.ShippingAddress.province,
    postalCode: req.body.ShippingAddress.postalCode,
    userPassword: req.body.userPassword,
    admin: req.body.admin,
  });

  newUser
    .save()
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      res.status(400).json({
        Message: "There was an error",
        err: err,
      });
    });
});

//login User
router.post("/api/login", async (req, res) => {
  const findUser = await usersSchema.findOne({
    userEmail: req.body.email,
  });

  console.log(findUser);

  //check if passwords match
  if (findUser) {
    if (await bcrypt.compare(req.body.password, findUser.userPassword)) {
      res.json({
        user: true,
        admin: findUser.admin,
        email: findUser.userEmail,
      });
    } else {
      res.json({ user: false });
    }
  } else {
    res.json({ user: false });
    console.log("this one");
  }
});

module.exports = router;
