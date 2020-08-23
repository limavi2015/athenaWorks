'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Cargar rutas
var all_routes = require('./routes/routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar cabeceras y CORS
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method,responseType');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    next();
})

// rutas base
app.use('/api', all_routes);

module.exports = app;
