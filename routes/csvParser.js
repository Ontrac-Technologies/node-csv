const { Router } = require('express');

const controller = require('../controllers/csvParser');

const router = Router();

router.post('/parse', controller.handleCsvParser);

module.exports = router;
