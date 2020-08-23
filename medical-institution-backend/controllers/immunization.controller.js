'use strict'

var ImmunizationModel = require('../models/immunization.model');

function getImmunizations(req, res) {
  let where = {};
  let id= req.query.patientIdentification;
  if(id) { where.patientIdentification = id}

  ImmunizationModel.find(where).exec((err, immunizations)=>{
      if(err)
        return res.status(500).send({
            message: 'Error'
        });
      else 
        return res.status(200).send({
            immunizations
        });
  })
}

function addImmunizations(req, res) {
  let where = {};
  where.patientIdentification = req.body.patientIdentification
  where.immunizationName = req.body.immunizationName

  ImmunizationModel.updateOne(where, req.body, { upsert: true }, (err, immunizationUpdated) => {
      if (err) {
          console.log(err);
          res.status(500).send({
              message: 'Error to save immunization'
          });
      } else {
          if (!immunizationUpdated) {
              res.status(404).send({
                  message: 'immunization did not save'
              });
          } else {
              res.status(200).send({
                meesage: 'immunization saved'
              });              
          }
      }
  });
}

function deleteImmunization(req, res) {
  ImmunizationModel.deleteOne({_id: req.query.id}, (err, immunizationDeleted) => {
      if (err) {
          return res.status(500).send({
              message: 'Error to delete immunization'
          });
      } else {
          if (immunizationDeleted.deletedCount==0) {
              return res.status(404).send({
                  message: 'Could not delete the immunization'
              });
          } else {
              return res.status(200).send({
                message: 'immunization deleted'
              });
          }
      }
  });
}

module.exports = {
    getImmunizations,
    addImmunizations,
    deleteImmunization
}