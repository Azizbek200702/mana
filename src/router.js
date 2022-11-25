const express = require("express");
const router = express.Router();
const orderRouter = require("./order/router")
const productRouter = require("./product/product.router");
const categoryRouter = require("./category/router")

const path = require("path");

http://localhost:5000/user
router.use("/order", orderRouter);


http://localhost:5000/admin
router.use("/category", categoryRouter);


http://localhost:5000/product
router.use("/product", productRouter);

// router.use("/elonlar", fileRoutes.routes);



module.exports = router;
