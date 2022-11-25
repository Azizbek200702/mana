"use strict";
const Product = require("./product.model");
const fs = require("fs");

const addProduct = async (req, res) => {
  try {
    // let foo = await Product.find().count();

    // const multipleFiles = new Product({

    //   decription: req.body.decription,
    //   category: req.body.category,
    //   subCategory: req.body.category,
    //   price: req.body.price,
    //   title: req.body.title,
    //   status: req.body.status,
    //   form: req.body.form,
    //   // imagePath: req.files[0].filename,
    //   id: foo + 1,
    // });
    // console.log(req.files)
    // // console.log(req.body);

    // await multipleFiles.save();
    // res.status(201).send("Files Uploaded Successfully");
    

      console.log(req)

    const saveImage = new Product({
      imagePath: `${req.protocol}://${req.get("host")}/uploads/${req.file.originalname}`,
      quantity: req.body.quantity,
      title: req.body.title,
      category: req.body.category,
      subCategory: req.body.subCategory,
      price: req.body.price,
      status: req.body.status,
      form: req.body.form,
      id: req.body.id,
      decription: req.body.decription,
    });
    let result = await saveImage.save() 
      
    return res.status(200).send(result);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const allData = await Product.find();
    return res.status(200).json(allData);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

async function deleteProduct(req, res) {
  try {
    let userId = req.params.id;
    let del = await Product.findOne({ userId });
    console.log(req.files)
    fs.unlink(`./uploads${del}`, function (err) {
      if (err) {
        console.log("eeee");
        console.log(err);
      }
      console.log("File has been Deleted");
    });

    let result = await Product.findByIdAndDelete(userId);
    return res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}

module.exports = {
  addProduct,
  getProduct,
  deleteProduct,
};
