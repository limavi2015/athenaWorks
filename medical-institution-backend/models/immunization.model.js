'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Shema = Schema({
    patientIdentification:Number,
    date: String,
    immunizationName: String,
    type:String,
    doseQuantity: String,
    instructions: String 
}, { collection: 'immunization' });

module.exports = mongoose.model('immunization', Shema);