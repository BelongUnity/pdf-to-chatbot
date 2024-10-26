# PDF to Chatbot

This open-source web application allows users to upload PDF files and create a chatbot based on the content of the document. The application uses OpenAI's API to analyze the text and provide natural language responses to user queries.

## Features

- PDF Upload: Users can upload PDF files for analysis.
- Chatbot Creation: An interactive chatbot is generated based on the uploaded PDF content using OpenAI's model.
- Easy Setup: The project is accessible via GitHub, and users can run it by adding their own OpenAI API key.

## Tech Stack

- Frontend: React, Tailwind CSS
- Backend: Node.js, Express
- API Integration: OpenAI API
- Version Control: GitHub

## Setup and Installation

1. Clone the repository:   ```
   git clone https://github.com/BelongUnity/pdf-to-chatbot.git
   cd pdf-to-chatbot   ```

2. Install dependencies:   ```
   npm run install-deps   ```

3. Set up environment variables:
   - In the `backend` folder, create a `.env` file and add your OpenAI API key:     ```
     OPENAI_API_KEY=your_openai_api_key_here     ```
   - In the `frontend` folder, create a `.env` file and add the backend URL:     ```
     REACT_APP_API_URL=http://localhost:5000     ```

4. Start the application:   ```
   npm run start   ```

5. Open your browser and navigate to `http://localhost:3000` to use the application.

## Usage

1. Upload a PDF file using the provided interface.
2. Once the PDF is processed, the chatbot interface will appear.
3. Ask questions related to the content of the PDF, and the chatbot will provide answers based on the document.

## Future Improvements

1. Multi-file Support: Allow users to upload multiple PDFs to create a more comprehensive knowledge base.
2. User Authentication: Implement user accounts to save chat history and manage multiple documents.
3. Enhanced PDF Processing: Improve text extraction from PDFs, including support for scanned documents and images.
4. Customizable AI Models: Allow users to choose different AI models or fine-tune existing ones for specific domains.
5. Export Functionality: Enable users to export chat logs or summaries of their conversations.
6. Mobile Responsiveness: Optimize the user interface for mobile devices.
7. Offline Mode: Implement a feature to use the application without an internet connection for privacy-sensitive documents.
8. Integration with Other File Types: Extend support to other document formats like .docx, .txt, or .epub.
9. Collaborative Features: Allow multiple users to chat with the same document-based AI simultaneously.
10. Analytics Dashboard: Provide insights on document content, frequently asked questions, and chatbot performance.

## Contributing

We welcome contributions to improve PDF to Chatbot! Please feel free to submit issues, fork the repository and send pull requests!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
