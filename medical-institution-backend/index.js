'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3789;

function conexion() {
    mongoose.connect('mongodb://mongo:27017/medicalInstitution', { useNewUrlParser: true }, (err, res) => {
        if (err) {
            throw err;
        } else {
            app.listen(port, () => {
                console.log("El servidor local está corriendo correctamente localhost:3789");
            })
        }
    });
}

setTimeout(conexion, 10000);
