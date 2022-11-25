const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
       title: { type: String, required: true , minlength: 3, maxlength: 200},
       parent: {type: mongoose.Schema.Types.ObjectId, default: null},
    },
    { timestamps: true, versionKey: false }
)

module.exports = mongoose.model("category", ProductSchema);