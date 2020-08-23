'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Shema = Schema({
    patientIdentification:Number,
    planActivity: String,
    planDate: String,
    instructions: String
}, { collection: 'planOfCare' });

module.exports = mongoose.model('planOfCare', Shema);