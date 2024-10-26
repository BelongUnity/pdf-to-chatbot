const { createChatCompletion } = require('../services/openaiService');

let pdfContent = '';

const setPDFContent = (content) => {
  pdfContent = content;
};

const chat = async (req, res) => {
  const { message } = req.body;

  if (!pdfContent) {
    return res.status(400).json({ error: 'No PDF content available. Please upload a PDF first.' });
  }

  try {
    const messages = [
      { role: "system", content: `You are a helpful assistant. Use the following PDF content to answer user questions: ${pdfContent}` },
      { role: "user", content: message }
    ];

    const response = await createChatCompletion(messages);
    res.json({ response });
  } catch (error) {
    console.error('Error in chat:', error);
    res.status(500).json({ error: 'Error processing chat request' });
  }
};

module.exports = { chat, setPDFContent };
