/* const express = require("express")
const Product = require("../models/productModel.js")
const router = express.Router()


router.post("/addproduct", async (req, res) => {
    try {
        console.log(req.body);
        const { name, createdAt, stock, price, image, category, dealerID, rating, starpoint, description } = req.body

        const createdProduct = await Product.create({
            name, createdAt, stock, price, image, category, dealerID, rating, starpoint, description
        })

        return res.status(201).json(createdProduct)
    } catch (err) {
        console.log(err)
        return res.json({ message: "create product failed" })
    }

})



module.exports = router */