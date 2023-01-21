const { default: mongoose } = require("mongoose");

const clientSchema = mongoose.Schema({

    fullname:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        required: true
    },
    basket:{
        type: Array,
        required: true
    },

   

}, { collection: "clients" })
module.exports = mongoose.model("Client", clientSchema)