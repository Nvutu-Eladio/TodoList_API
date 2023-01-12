'use strict'

const app = require('../src/app');
const express = require('express');

const PORT = normalizePort(process.env.PORT);
app.set('port', PORT)

app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`));

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}