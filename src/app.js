const express = require('express');
const statusRouter = require('./routes/status');

const app = express();

app.use('/status', statusRouter);

module.exports = app;
