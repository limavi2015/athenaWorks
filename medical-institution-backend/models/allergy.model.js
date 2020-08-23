'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Shema = Schema({
    patientIdentification: Number,
    allergyName: String,
    reaction:String,
    severity: String
    
}, { collection: 'allergy' });

module.exports = mongoose.model('allergy', Shema);