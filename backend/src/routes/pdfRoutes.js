const express = require('express');
const { uploadPDF, processPDF } = require('../controllers/pdfController');

const router = express.Router();

router.post('/upload', uploadPDF, processPDF);

module.exports = router;
