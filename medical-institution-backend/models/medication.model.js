'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Shema = Schema({
    patientIdentification:Number,
    date: String,
    medicationName: String,
    type:String,
    instructions: String,
    doseQuantity: String,
    rateQuantity: String,
    namePrescriber: String
}, { collection: 'medication' });

module.exports = mongoose.model('medication', Shema);