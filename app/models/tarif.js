'use strict'
let mongoose = require('mongoose')

module.exports = mongoose.model('Tarif', new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
}, {
    timestamps: true
}))
