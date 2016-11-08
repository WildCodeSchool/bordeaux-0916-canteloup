'use strict'
let mongoose = require('mongoose')

module.exports = mongoose.model('Event', new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle:{
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true
    },
    image:{
      type: String
    },
    date:{
      type: Date,
      required: true
    },
    isDraft: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
}))
