'use strict'

var MedicationModel = require('../models/medication.model');

function getMedications(req, res) {
  let where = {};
  let id= req.query.patientIdentification;
  if(id) { where.patientIdentification = id}

  MedicationModel.find(where).exec((err, medications)=>{
      if(err)
        return res.status(500).send({
            message: 'Error'
        });
      else 
        return res.status(200).send({
            medications
        });
  })
}

function addMedication(req, res) {
  let where = {};
  where.patientIdentification = req.body.patientIdentification
  where.medicationName = req.body.medicationName

  MedicationModel.updateOne(where, req.body, { upsert: true }, (err, medicationUpdated) => {
      if (err) {
          console.log(err);
          res.status(500).send({
              message: 'Error to save medication'
          });
      } else {
          if (!medicationUpdated) {
              res.status(404).send({
                  message: 'medication did not save'
              });
          } else {
              res.status(200).send({
                meesage: 'medication saved'
              });              
          }
      }
  });
}

function deleteMedication(req, res) {
    MedicationModel.deleteOne({_id: req.query.id}, (err, medicationDeleted) => {
      if (err) {
          return res.status(500).send({
              message: 'Error to delete medication'
          });
      } else {
          if (medicationDeleted.deletedCount==0) {
              return res.status(404).send({
                  message: 'Could not delete the medication'
              });
          } else {
              return res.status(200).send({
                message: 'medication deleted'
              });
          }
      }
  });
}

module.exports = {
    getMedications,
    addMedication,
    deleteMedication
}
