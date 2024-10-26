const multer = require('multer');
const pdfParse = require('pdf-parse');
const { setPDFContent } = require('./chatController');

const upload = multer({ storage: multer.memoryStorage() });

const uploadPDF = upload.single('pdf');

const processPDF = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No PDF file uploaded' });
  }

  try {
    const pdfData = await pdfParse(req.file.buffer);
    const text = pdfData.text;
    
    setPDFContent(text);
    res.json({ message: 'PDF processed successfully', textPreview: text.slice(0, 200) });
  } catch (error) {
    console.error('Error processing PDF:', error);
    res.status(500).json({ error: 'Error processing PDF' });
  }
};

module.exports = { uploadPDF, processPDF };
