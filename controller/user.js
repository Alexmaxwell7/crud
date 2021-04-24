const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jsonwt = require("jsonwebtoken");
// const key = require("../Setup/url").secret;

// router.post("/userInfo", async (req, res) => {
//   jsonwt.verify(req.cookies.auth_t, key, (err, user) => {
//     if (user) {
//       return res.json({
//         email: user.email,
//         username: user.username,
//         description: user.description
//       });
//     }
//   });
// });

exports.getUserDetails = async (req, res) => {
  jsonwt.verify(req.cookies.auth_t, (err, user) => {
    if (user) {
      return res.json({
        email: user.email,
        username: user.username,
        description: user.description
      });
    }
  });
};

exports.RegisterUser = async (req, res) => {
  const { username, email, password, description } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return res.json({ success: false, errMessage: "User Already Exists" });
  } else {
    let newUser = new User({
      username,
      email,
      password,
      description
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        newUser.password = hash;
        newUser.save().catch(err => console.log(err));
      });
    });
    return res.json({
      success: true,
      errMessage: "User Registered Successfully"
    });
  }
};

exports.LoginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ success: false, errMessage: "User Doesn't exist." });
  } else {
    var payload = {
      id: user.id,
      username: user.username,
      email: user.email,
      description: user.description
    };

    bcrypt
      .compare(password, user.password)
      .then(isCorrect => {
        if (!isCorrect)
          return res.json({
            success: false,
            errMessage: "Password Incorrect."
          });
        else {
          jsonwt.sign(payload, { expiresIn: 9000000 }, (err, token) => {
            res.cookie("auth_t", token, { maxAge: 90000000 });
            res.cookie("username", payload.username, { maxAge: 90000000 });
            return res.json({ success: true, errMessage: "Logged In..." });
          });
        }
      })
      .catch(err => console.log(err));
  }
};

// router.get("/logout", (req, res) => {
//   res.clearCookie("auth_t");
//   req.logout();
// });

// module.exports = router;
