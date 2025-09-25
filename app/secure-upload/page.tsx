'use client';

import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, FileText, Shield, Upload } from 'lucide-react';
import { useRef, useState } from 'react';
import PageHeader from "../components/PageHeader";

interface UploadStatus {
  status: 'idle' | 'file-selected' | 'uploading' | 'success' | 'error';
  message: string;
  fileName?: string;
  fileSize?: number;
}

interface TeamMember {
  name: string;
  email: string;
  phone: string;
}

interface UploadForm {
  file: File | null;
  password: string;
  confirmPassword: string;
  recipient: string;
  senderName: string;
  senderEmail: string;
  message: string;
}

export default function SecureUpload() {
    const [uploadStatus, setUploadStatus] = useState<UploadStatus>({ status: 'idle', message: '' });
    const [dragActive, setDragActive] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const [formData, setFormData] = useState<UploadForm>({
        file: null,
        password: '',
        confirmPassword: '',
        recipient: '',
        senderName: '',
        senderEmail: '',
        message: ''
    });

    const teamMembers: TeamMember[] = [
        { name: 'Alan Johnson', email: 'alanj@vistapacificcapital.com', phone: '(714) 500-7017' },
        { name: 'Ian Whitelaw', email: 'ianw@vistapacificcapital.com', phone: '(714) 408-4574' },
        { name: 'John Mirabal', email: 'johnm@vistapacificcapital.com', phone: '(714) 551-9955' }
    ];

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = (file: File) => {
        // Validate file type
        if (!file.name.toLowerCase().endsWith('.pdf')) {
            setUploadStatus({
                status: 'error',
                message: 'Only PDF files are allowed. Please select a PDF document.'
            });
            return;
        }

        // Validate file size (25MB limit)
        const maxSize = 25 * 1024 * 1024; // 25MB
        if (file.size > maxSize) {
            setUploadStatus({
                status: 'error',
                message: 'File size must be less than 25MB. Please compress your PDF or split it into smaller files.'
            });
            return;
        }

        // File is valid, show the form
        setFormData(prev => ({ ...prev, file }));
        setUploadStatus({ 
            status: 'file-selected', 
            message: 'File selected. Please complete the form below to send securely.',
            fileName: file.name,
            fileSize: file.size
        });
    };

    const validateForm = (): string | null => {
        if (!formData.file) return 'No file selected';
        if (!formData.senderName.trim()) return 'Your name is required';
        if (!formData.senderEmail.trim()) return 'Your email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.senderEmail)) return 'Please enter a valid email address';
        if (!formData.recipient) return 'Please select a recipient';
        if (!formData.password) return 'Password is required';
        if (formData.password.length < 6) return 'Password must be at least 6 characters';
        if (formData.password !== formData.confirmPassword) return 'Passwords do not match';
        return null;
    };

    const handleSubmit = async () => {
        const validationError = validateForm();
        if (validationError) {
            setUploadStatus({
                status: 'error',
                message: validationError
            });
            return;
        }

        setUploadStatus({ 
            status: 'uploading', 
            message: 'Uploading and securing your document...',
            fileName: formData.file!.name,
            fileSize: formData.file!.size
        });

        try {
            const submitData = new FormData();
            submitData.append('file', formData.file!);
            submitData.append('password', formData.password);
            submitData.append('recipient', formData.recipient);
            submitData.append('senderName', formData.senderName);
            submitData.append('senderEmail', formData.senderEmail);
            submitData.append('message', formData.message);
            submitData.append('timestamp', new Date().toISOString());

            const response = await fetch('/api/upload-documents', {
                method: 'POST',
                body: submitData,
            });

            const result = await response.json();

            if (response.ok && result.success) {
                const recipientName = teamMembers.find(tm => tm.email === formData.recipient)?.name || 'team member';
                setUploadStatus({
                    status: 'success',
                    message: `Document uploaded successfully! A secure ZIP file has been sent to ${recipientName} with your custom password.`,
                    fileName: result.fileName,
                    fileSize: result.fileSize
                });
                // Reset form only on success
                setFormData({
                    file: null,
                    password: '',
                    confirmPassword: '',
                    recipient: '',
                    senderName: '',
                    senderEmail: '',
                    message: ''
                });
                // Reset file input only on success
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            } else {
                throw new Error(result.error || 'Upload failed');
            }
        } catch (error: any) {
            setUploadStatus({
                status: 'error',
                message: error.message || 'Upload failed. Please try again or contact support.'
            });
            // Don't reset form data on error - keep user's input
        }
    };

    const resetUpload = () => {
        setUploadStatus({ status: 'idle', message: '' });
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="bg-white font-sans">
            <PageHeader
                title="Secure Application Submission"
                subtitle="Upload your documents securely for faster processing"
                buttonText="Start Application"
                buttonHref="/apply"
                backgroundImage="/Images/office.png"
                highlightWord="Secure"
            />
            
            <motion.div 
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: 0.1
                }}
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Secure Document Upload Portal
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Upload your PDF documents securely. Files are automatically encrypted, 
                        password-protected, and delivered to our team for immediate processing.
                    </p>
                </div>

                {/* Security Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                        <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                        <h3 className="font-semibold text-green-900 mb-2">Bank-Level Security</h3>
                        <p className="text-sm text-green-700">Your documents are encrypted and password-protected</p>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
                        <FileText className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                        <h3 className="font-semibold text-blue-900 mb-2">PDF Only</h3>
                        <p className="text-sm text-blue-700">Accepts PDF documents up to 25MB in size</p>
                    </div>
                    <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-200">
                        <CheckCircle className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                        <h3 className="font-semibold text-purple-900 mb-2">Instant Processing</h3>
                        <p className="text-sm text-purple-700">Immediate delivery to our financing team</p>
                    </div>
                </div>

                {/* Upload Area */}
                <div className="max-w-2xl mx-auto">
                    {uploadStatus.status === 'idle' && (
                        <div
                            className={`
                                relative border-2 border-dashed rounded-lg p-12 text-center transition-all duration-200
                                ${dragActive 
                                    ? 'border-[#0EB5B2] bg-[#0EB5B2]/5' 
                                    : 'border-gray-300 hover:border-[#0EB5B2] hover:bg-gray-50'
                                }
                            `}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                        >
                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Drop your PDF here or click to browse
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Maximum file size: 25MB • PDF format only
                            </p>
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="bg-[#0EB5B2] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0D3853] transition-colors duration-200"
                            >
                                Select PDF File
                            </button>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept=".pdf"
                                onChange={handleFileInput}
                                className="hidden"
                            />
                        </div>
                    )}

                    {uploadStatus.status === 'file-selected' && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                            <div className="flex items-center justify-center mb-6">
                                <FileText className="w-8 h-8 text-blue-600 mr-3" />
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-900">{uploadStatus.fileName}</h3>
                                    <p className="text-sm text-blue-600">{uploadStatus.fileSize && formatFileSize(uploadStatus.fileSize)}</p>
                                </div>
                            </div>
                            
                            <div className="bg-white rounded-lg p-6 space-y-6">
                                <h4 className="text-xl font-semibold text-gray-900 mb-4">Secure Delivery Details</h4>
                                
                                {/* Sender Information */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                                        <input
                                            type="text"
                                            value={formData.senderName}
                                            onChange={(e) => setFormData(prev => ({ ...prev, senderName: e.target.value }))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Email *</label>
                                        <input
                                            type="email"
                                            value={formData.senderEmail}
                                            onChange={(e) => setFormData(prev => ({ ...prev, senderEmail: e.target.value }))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                {/* Recipient Selection */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Send To *</label>
                                    <select
                                        value={formData.recipient}
                                        onChange={(e) => setFormData(prev => ({ ...prev, recipient: e.target.value }))}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent"
                                    >
                                        <option value="">Select team member...</option>
                                        {teamMembers.map((member) => (
                                            <option key={member.email} value={member.email}>
                                                {member.name} - {member.phone}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Password Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Password *</label>
                                        <input
                                            type="password"
                                            value={formData.password}
                                            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent"
                                            placeholder="Minimum 6 characters"
                                            minLength={6}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
                                        <input
                                            type="password"
                                            value={formData.confirmPassword}
                                            onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent"
                                            placeholder="Re-enter password"
                                        />
                                    </div>
                                </div>

                                {/* Optional Message */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                        rows={3}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent"
                                        placeholder="Add a note about this document..."
                                    />
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <button
                                        onClick={handleSubmit}
                                        className="flex-1 bg-[#0EB5B2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0D3853] transition-colors duration-200"
                                    >
                                        Send Secure Document
                                    </button>
                                    <button
                                        onClick={resetUpload}
                                        className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        Choose Different File
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {uploadStatus.status === 'uploading' && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
                            <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                            <h3 className="text-xl font-semibold text-blue-900 mb-2">Uploading Document</h3>
                            <p className="text-blue-700 mb-2">{uploadStatus.message}</p>
                            {uploadStatus.fileName && (
                                <div className="text-sm text-blue-600">
                                    <p className="font-medium">{uploadStatus.fileName}</p>
                                    {uploadStatus.fileSize && (
                                        <p>{formatFileSize(uploadStatus.fileSize)}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {uploadStatus.status === 'success' && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-green-900 mb-4">Upload Successful!</h3>
                            <p className="text-green-700 mb-6">{uploadStatus.message}</p>
                            {uploadStatus.fileName && (
                                <div className="bg-white rounded-lg p-4 mb-6 border border-green-200">
                                    <div className="flex items-center justify-center">
                                        <FileText className="w-5 h-5 text-green-600 mr-2" />
                                        <span className="font-medium text-green-900">{uploadStatus.fileName}</span>
                                        {uploadStatus.fileSize && (
                                            <span className="text-sm text-green-600 ml-2">
                                                ({formatFileSize(uploadStatus.fileSize)})
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={resetUpload}
                                    className="bg-[#0EB5B2] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0D3853] transition-colors duration-200"
                                >
                                    Upload Another Document
                                </button>
                                <a 
                                    href="/apply" 
                                    className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                                >
                                    Start New Application
                                </a>
                            </div>
                        </div>
                    )}

                    {uploadStatus.status === 'error' && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
                            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-red-900 mb-4">Upload Failed</h3>
                            <p className="text-red-700 mb-6">{uploadStatus.message}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={resetUpload}
                                    className="bg-[#0EB5B2] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0D3853] transition-colors duration-200"
                                >
                                    Try Again
                                </button>
                                <a 
                                    href="/contact" 
                                    className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                                >
                                    Contact Support
                                </a>
                            </div>
                        </div>
                    )}
                </div>

                {/* Instructions */}
                <div className="mt-16 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-[#0EB5B2] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                            <h4 className="font-semibold text-gray-900 mb-2">Upload Your PDF</h4>
                            <p className="text-gray-600 text-sm">Drag and drop or select your PDF document (up to 25MB)</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-[#0EB5B2] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                            <h4 className="font-semibold text-gray-900 mb-2">Automatic Security</h4>
                            <p className="text-gray-600 text-sm">Your document is encrypted, zipped, and password-protected</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-[#0EB5B2] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                            <h4 className="font-semibold text-gray-900 mb-2">Instant Delivery</h4>
                            <p className="text-gray-600 text-sm">Secure file is immediately sent to our financing team</p>
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h3>
                    <p className="text-gray-600 mb-4">
                        If you're having trouble uploading your documents or have questions about the process, 
                        our team is here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="tel:+17145007017" 
                            className="bg-[#0EB5B2] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#0D3853] transition-colors duration-200"
                        >
                            Call (714) 500-7017
                        </a>
                        <a 
                            href="mailto:alanj@vistapacificcapital.com" 
                            className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                        >
                            Email Support
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
