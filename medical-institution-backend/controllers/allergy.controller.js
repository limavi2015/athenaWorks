'use strict'

var AllergyModel = require('../models/allergy.model');

function getAllergies(req, res) {
  let where = {};
  let id= req.query.patientIdentification;
  if(id) { where.patientIdentification = id}

  AllergyModel.find(where).exec((err, allergies)=>{
      if(err)
        return res.status(500).send({
            message: 'Error'
        });
      else 
        return res.status(200).send({
            allergies
        });
  })
}

function addAllergies(req, res) {
  let where = {};
  where.patientIdentification = req.body.patientIdentification
  where.allergyName = req.body.allergyName

  AllergyModel.updateOne(where, req.body, { upsert: true }, (err, allergyUpdated) => {
      if (err) {
          console.log(err);
          res.status(500).send({
              message: 'Error to save allergy'
          });
      } else {
          if (!allergyUpdated) {
              res.status(404).send({
                  message: 'Allergy did not save'
              });
          } else {
              res.status(200).send({
                meesage: 'Allergy saved'
              });              
          }
      }
  });
}

function deleteAllergy(req, res) {
    AllergyModel.deleteOne({_id: req.query.id} , (err, allergyDeleted) => {
        if (err) {
            return res.status(500).send({
                message: 'Error to delete allergy'
            });
        } else {
            if (allergyDeleted.deletedCount==0) {
                return res.status(404).send({
                    message: 'Could not delete the allergy'
                });
            } else {
                return res.status(200).send({
                    message: 'allergy deleted',
                });
            }
        }
    });
}

module.exports = {
    getAllergies,
    addAllergies,
    deleteAllergy
}