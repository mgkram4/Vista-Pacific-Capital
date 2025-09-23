'use client';

import { CheckCircle, Upload, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SuccessModalProps {
  isVisible: boolean;
  onClose: () => void;
  isVendorForm?: boolean;
  customMessage?: string;
  submissionDate?: string;
}

export default function SuccessModal({ isVisible, onClose, isVendorForm = false, customMessage, submissionDate }: SuccessModalProps) {
  const [showContent, setShowContent] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Small delay to trigger the animation
      setTimeout(() => setShowContent(true), 100);
    } else {
      setShowContent(false);
      setShowFileUpload(false);
      setSelectedFile(null);
      setUploading(false);
      setUploadSuccess(false);
    }
  }, [isVisible]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check if it's a PDF file
      if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
        setSelectedFile(file);
      } else {
        alert('Please select a PDF file only.');
        event.target.value = '';
      }
    }
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert('Please select a PDF file.');
      return;
    }

    setUploading(true);
    
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('timestamp', new Date().toISOString());

      const response = await fetch('/api/upload-documents', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setUploadSuccess(true);
        setSelectedFile(null);
        setTimeout(() => {
          setShowFileUpload(false);
          setUploadSuccess(false);
        }, 2000);
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed. Please try again or contact support.');
    } finally {
      setUploading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div 
        className={`bg-white rounded-xl shadow-2xl max-w-md w-full transform transition-all duration-300 ${
          showContent ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="relative p-6 text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
          
          {/* Success Icon with Animation */}
          <div className="mb-4 flex justify-center">
            <div 
              className={`relative transform transition-all duration-500 ${
                showContent ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
              }`}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              {/* Animated ring */}
              <div 
                className={`absolute inset-0 border-4 border-green-200 rounded-full transition-all duration-1000 ${
                  showContent ? 'scale-125 opacity-0' : 'scale-100 opacity-100'
                }`}
              />
            </div>
          </div>

          {/* Success Message */}
          <h2 
            className={`text-2xl font-bold text-gray-800 mb-2 transform transition-all duration-500 delay-200 ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Application Submitted!
          </h2>
          
          {submissionDate && (
            <p 
              className={`text-sm text-gray-500 mb-3 transform transition-all duration-500 delay-250 ${
                showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              Submitted on {submissionDate}
            </p>
          )}
          
          <div 
            className={`text-gray-600 space-y-3 transform transition-all duration-500 delay-300 ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {customMessage ? (
              <p className="text-base">
                {customMessage}
              </p>
            ) : isVendorForm ? (
              <p className="text-base">
                Thank you, your application is being assigned to a Vista Pacific Capital representative and someone will reach out within one business day.
              </p>
            ) : (
              <>
                <p className="text-base">
                  Thank you for your submission, a copy of your application will be emailed to you.
                </p>
                <p className="text-base">
                  Someone will reach out to you within one business day.
                </p>
              </>
            )}
            <p className="text-sm text-gray-500">
              If you have any questions, please feel free to call{' '}
              <a 
                href="tel:7145007017" 
                className="text-[#0EB5B2] hover:text-[#0D3853] font-medium"
              >
                (714) 500-7017
              </a>
            </p>
          </div>
        </div>

        {/* File Upload Section */}
        {!showFileUpload && (
          <div 
            className={`px-6 pb-4 border-t border-gray-100 transform transition-all duration-500 delay-400 ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <button
              onClick={() => setShowFileUpload(true)}
              className="w-full bg-blue-50 text-blue-700 py-3 px-4 rounded-lg font-medium hover:bg-blue-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Upload size={18} />
              Have files ready to submit?
            </button>
          </div>
        )}

        {/* File Upload Form */}
        {showFileUpload && (
          <div className="px-6 pb-4 border-t border-gray-100 space-y-4">
            <h3 className="font-semibold text-gray-800 text-center">Upload Supporting Documents</h3>
            <p className="text-sm text-gray-600 text-center">
              Upload a PDF file with your documents. It will be securely zipped and sent.
            </p>
            
            {uploadSuccess ? (
              <div className="text-center py-4">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-green-600 font-medium">Documents uploaded successfully!</p>
              </div>
            ) : (
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select PDF file
                  </label>
                  <input
                    type="file"
                    accept=".pdf,application/pdf"
                    onChange={handleFileSelect}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowFileUpload(false)}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleFileUpload}
                    disabled={!selectedFile || uploading}
                    className="flex-1 bg-[#0EB5B2] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#0D3853] transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    {uploading ? 'Uploading...' : 'Upload'}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div 
          className={`px-6 pb-6 transform transition-all duration-500 delay-400 ${
            showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <button
            onClick={onClose}
            className="w-full bg-[#0EB5B2] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#0D3853] transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
} 