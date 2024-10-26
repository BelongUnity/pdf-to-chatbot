import React, { useState } from 'react';
import axios from 'axios';

const PDFUploader = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [pdfPreview, setPdfPreview] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a PDF file first');
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append('pdf', file);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/pdf/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPdfPreview(response.data.textPreview);
      onUploadSuccess();
    } catch (error) {
      console.error('Error uploading PDF:', error);
      alert('Error uploading PDF');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mt-4">
      <input type="file" accept=".pdf" onChange={handleFileChange} className="mb-2" />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {uploading ? 'Uploading...' : 'Upload PDF'}
      </button>
      {pdfPreview && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">PDF Content Preview:</h3>
          <p className="mt-2 text-sm">{pdfPreview}...</p>
        </div>
      )}
    </div>
  );
};

export default PDFUploader;
