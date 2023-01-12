//modules
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
const router = express.Router();

require('dotenv').config();

//middlewares
//config bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//connetion BD
    try {
    mongoose.set("strictQuery", true);
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/taskList')
    } catch (error) {
        console.log("Erro ao se conectar: "+ err)
    }
    

//carregando rotas
const indexRoute = require('./routes/index-route');
const taskRoute = require('./routes/task-route');

//Carregando models
const Task = require('./models/Task')
require('./models/database');

//rotas
app.use('/',indexRoute)
app.use('/task',taskRoute)


module.exports = app;