'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Shema = Schema({
    identification: Number,
    firstName: String,
    lastName:String,
    gender: String,
    maritalStatus: String,
    religiousaAffiliation: String,
    ethnicity: String,
    languageSpoken: String,
    address: String,
    telephone: String,
    birthday: String,
    guardian: {
        role: String,
        firtName: String,
        lastName: String,
        address: String,
        telephone: String
    },
    provider:{
        nameProvider: String,
        address: String,
        telephone: String
    }
}, { collection: 'patient' });

module.exports = mongoose.model('patient', Shema);