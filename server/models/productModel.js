const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    dealerID: {
        type: String,
        required: true
    },
    rating:{
        type: Array,
        required: true
    },
    starpoint:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    },




}, { collection: "products" })
module.exports = mongoose.model("Product", productSchema)