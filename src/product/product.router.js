"use strict";
const multer = require("multer");
const express = require("express");
const {
  addProduct,
  getProduct,
  deleteProduct,
} = require("./product.controller");
const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
router.post("/",upload.single("imagePath"), addProduct);

router.get("/", getProduct);

router.delete("/:id", deleteProduct);


module.exports = router