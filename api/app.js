require('dotenv').config();
const mongoose = require('mongoose');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const routerApidocs = require('./routes/router_apidocs');
const routerTarefas = require('./routes/router_tarefas');

mongoose.connect(process.env.MONGODB_URL);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api-docs', routerApidocs);
app.use('/tarefas', routerTarefas);

module.exports = app;
