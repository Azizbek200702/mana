const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
       name: { type: String, minlength: 3, maxlength: 200, required: true }, 
       address: { type: String, minlength: 3, maxlength: 200, required: true },
       date: { type: String, required: true },
       order:  {type: [Object], required: true},
       location: { type: Object, required: true },
       status: { type: Number, required: true }
    },
    { timestamps: true, versionKey: false }
)

module.exports = mongoose.model("order", ProductSchema);