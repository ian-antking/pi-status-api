const express = require('express');
const statusRouter = require('./routes/status');

const app = express();

app.use(express.static('public'));
app.use('/status', statusRouter);

module.exports = app;
