const express = require("express");
const router = express.Router();
const { UsersModel } = require("./../models/users");

router.post("", (req, res) => {
  let newUser = req.body;

  UsersModel.addNewUser(
    newUser,
    (dbRes) => {
      res.send(dbRes);
    },
    (dbErr) => {
      res.status(400);
      res.send({ name: dbErr.name, message: dbErr.message });
    },
    res
  );
});

module.exports = router;
