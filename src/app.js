const express = require('express');
const statusRouter = require('./routes/status');
const modeRouter = require('./routes/mode');

const app = express();

app.use(express.static('public'));
app.use('/status', statusRouter);
app.use('/mode', modeRouter);

module.exports = app;
