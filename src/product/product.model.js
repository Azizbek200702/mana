const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
          decription: {type: String,minlength: 3, maxlength: 200, required: true},
          category: {type: mongoose.Schema.Types.ObjectId , required: true},
          subCategory: {type: mongoose.Schema.Types.ObjectId , required: true},
          imagePath:{type: String},
          form: {type: Boolean, required: true },
          price: {type: Number, required: true},
          status: {type: Boolean, required: true },
          title: {type: String, required: true , minlength: 3, maxlenght: 200},
          id: {type: Number, required: true},
          quantity: {type: Number, default: 1}
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Product", productSchema);