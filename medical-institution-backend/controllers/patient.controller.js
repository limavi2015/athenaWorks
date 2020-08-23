'use strict'

var PatientModel = require('../models/patient.model');

function getPatients(req, res) {
  let where = {};
  let identificationSearch= req.query.identification;
  if(identificationSearch) { where.identification = identificationSearch;}

  PatientModel.find(where).exec((err, patients)=>{
      if(err)
        return res.status(500).send({
            message: 'Error'
        });
      else 
        return res.status(200).send({
          patients
        });
  })
}

function addPatient(req, res) {
  let where = {};
  where.identification = req.body.identification;

  PatientModel.updateOne(where, req.body, { upsert: true }, (err, patientUpdated) => {
      if (err) {
          console.log(err);
          res.status(500).send({
              message: 'Error to save patient'
          });
      } else {
          if (!patientUpdated) {
              res.status(404).send({
                  message: 'Patient did not save'
              });
          } else {
              res.status(200).send({
                meesage: 'Patient saved'
              });              
          }
      }
  });
}

function deletePatient(req, res) {
  let where = {};
  where.identification = req.query.identification;
  PatientModel.deleteOne(where , (err, patientDeleted) => {
      console.log(patientDeleted)
      if (err) {
          return res.status(500).send({
              message: 'Error to delete patient'
          });
      } else {
          if (patientDeleted.deletedCount==0) {
              return res.status(404).send({
                  message: 'Could not delete the patient'
              });
          } else {
              return res.status(200).send({
                message: 'Patient deleted'
              });
          }
      }
  });
}

module.exports = {
  getPatients,
  addPatient,
  deletePatient
}
