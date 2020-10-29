const mongoose = require("mongoose")

const nameSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        uppercase: true
    },
    price: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
        minlength: true,
        unique: true,
    }
}, { collection: 'personal_budget_collection'})

module.exports = mongoose.model('personal_budget_collection', nameSchema)