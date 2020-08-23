'use strict'

var PlanOfCareModel = require('../models/planOfCare.model');

function getPlansOfCare(req, res) {
  let where = {};
  let id= req.query.patientIdentification;
  if(id) { where.patientIdentification = id}

  PlanOfCareModel.find(where).exec((err, PlansOfCare)=>{
      if(err)
        return res.status(500).send({
            message: 'Error'
        });
      else 
        return res.status(200).send({
            PlansOfCare
        });
  })
}

function addPlansOfCare(req, res) {
  let where = {};
  where.patientIdentification = req.body.patientIdentification
  where.planActivity = req.body.planActivity
  where.planDate = req.body.planDate

  PlanOfCareModel.updateOne(where, req.body, { upsert: true }, (err, planOfCareUpdated) => {
      if (err) {
          console.log(err);
          res.status(500).send({
              message: 'Error to save planOfCare'
          });
      } else {
          if (planOfCareUpdated.deletedCount==0) {
              res.status(404).send({
                  message: 'planOfCare did not save'
              });
          } else {
              res.status(200).send({
                meesage: 'planOfCare saved'
              });              
          }
      }
  });
}

function deleteplanOfCare(req, res) {
    PlanOfCareModel.deleteOne({_id: req.query.id} , (err, planOfCareDeleted) => {
        if (err) {
            return res.status(500).send({
                message: 'Error to delete planOfCare'
            });
        } else {
            if (planOfCareDeleted.deletedCount==0) {
                return res.status(404).send({
                    message: 'Could not delete the planOfCare'
                });
            } else {
                return res.status(200).send({
                    message: 'planOfCare deleted',
                });
            }
        }
    });
}

module.exports = {
    getPlansOfCare,
    addPlansOfCare,
    deleteplanOfCare
}
