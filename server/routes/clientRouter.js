const express = require("express")
const User = require("../models/UserModel.js")
const router = express.Router()


router.post("/addproduct", async (req, res) => {
    try {
        console.log(req.body);
        const { productID } = req.body

       

        return res.status(201).json()
    } catch (err) {
        console.log(err)
        return res.json({ message: "create user failed" })
    }

})



module.exports = router