const express = require('express');
const statusController = require('../controllers/status');

const router = express.Router();

router.get('/:name/:state', statusController.set);

module.exports = router;
