const express = require("express");
const router = express.Router();
const {
  getTransection,
  addTransection,
  deleteTransection
} = require("../controller/transection");

router.route("/").get(getTransection).post(addTransection);
router.route("/:id").delete(deleteTransection);
module.exports = router;
