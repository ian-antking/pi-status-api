const express = require('express');
const modeController = require('../controllers/mode');

const router = express.Router();

router.get('/:name/:mode', modeController.set);

module.exports = router;
