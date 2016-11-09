'use strict'
let mongoose = require('mongoose')

module.exports = mongoose.model('Coworker', new mongoose.Schema({
    company: {
        type: String,
        required: true,
        unique: true
    },
    slogan:{
      type: String,
      required: true,
    },
    resume: {
        type: String,
        required: true
    },
    image:{
      type: String
    },
    logo:{
      type: String
    },
    website:{
      type: String,
      required: true
    }
}, {
    timestamps: true
}))
