'use strict'

var express = require('express');
var api = express.Router();

var patientController = require('../controllers/patient.controller');
var allergyController = require('../controllers/allergy.controller');
var immunizationController = require('../controllers/immunization.controller');
var medicationController = require('../controllers/medication.controller');
var planOfCareController = require('../controllers/planOfCare.controller');

api.get('/patients', patientController.getPatients);
api.post('/patients', patientController.addPatient);
api.delete('/patients', patientController.deletePatient);

api.get('/allergies', allergyController.getAllergies);
api.post('/allergies', allergyController.addAllergies);
api.delete('/allergies', allergyController.deleteAllergy);

api.get('/immunizations', immunizationController.getImmunizations);
api.post('/immunizations', immunizationController.addImmunizations);
api.delete('/immunizations', immunizationController.deleteImmunization);

api.get('/medications', medicationController.getMedications);
api.post('/medications', medicationController.addMedication);
api.delete('/medications', medicationController.deleteMedication);

api.get('/plansOfCare', planOfCareController.getPlansOfCare);
api.post('/plansOfCare', planOfCareController.addPlansOfCare);
api.delete('/plansOfCare', planOfCareController.deleteplanOfCare);


module.exports = api;
