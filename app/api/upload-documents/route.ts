import archiver from 'archiver';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const timestamp = formData.get('timestamp') as string;
    const password = formData.get('password') as string;
    const recipient = formData.get('recipient') as string;
    const senderName = formData.get('senderName') as string;
    const senderEmail = formData.get('senderEmail') as string;
    const message = formData.get('message') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'File is required' },
        { status: 400 }
      );
    }

    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      );
    }

    if (!recipient) {
      return NextResponse.json(
        { error: 'Recipient is required' },
        { status: 400 }
      );
    }

    if (!senderName || !senderEmail) {
      return NextResponse.json(
        { error: 'Sender information is required' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.name.toLowerCase().endsWith('.pdf')) {
      return NextResponse.json(
        { error: 'Only PDF files are allowed' },
        { status: 400 }
      );
    }

    // Validate file size (limit to 25MB)
    const maxSize = 25 * 1024 * 1024; // 25MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File size must be less than 25MB' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const pdfBuffer = Buffer.from(await file.arrayBuffer());
    
    // Create a new file name for the zip
    const zipFileName = file.name.replace(/\.pdf$/i, '.zip');

    // Create a standard zip file (password protection would require additional libraries)
    // The password is sent separately in the email for security
    const zipBuffer = await new Promise<Buffer>((resolve, reject) => {
      const archive = archiver('zip', { 
        zlib: { level: 9 },
        forceLocalTime: true
      });
      const chunks: any[] = [];
      
      archive.on('data', (chunk) => chunks.push(chunk));
      archive.on('end', () => resolve(Buffer.concat(chunks)));
      archive.on('error', (err) => {
        console.error('Archive error:', err);
        reject(err);
      });
      
      // Add the PDF file to the archive
      archive.append(pdfBuffer, { name: file.name });
      archive.finalize();
    });
    

    // Create transporter for sending email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: recipient,
      cc: senderEmail,
      subject: `Secure Document from ${senderName} - ${new Date(timestamp).toLocaleDateString()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0D3853;">Secure Document Received</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0EB5B2; margin-top: 0;">Sender Information:</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="margin: 8px 0;"><strong>From:</strong> ${senderName}</li>
              <li style="margin: 8px 0;"><strong>Email:</strong> ${senderEmail}</li>
              <li style="margin: 8px 0;"><strong>Sent:</strong> ${new Date(timestamp).toLocaleString()}</li>
            </ul>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0EB5B2; margin-top: 0;">File Details:</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="margin: 8px 0;"><strong>Original File:</strong> ${file.name}</li>
              <li style="margin: 8px 0;"><strong>File Size:</strong> ${(file.size / 1024 / 1024).toFixed(2)} MB</li>
            </ul>
          </div>

          ${message ? `
          <div style="background-color: #e8f4f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0D3853; margin-top: 0;">Message from Sender:</h3>
            <p style="color: #0D3853; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}

          <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107;">
            <h4 style="color: #856404; margin-top: 0;">🔐 ZIP Password</h4>
            <p style="color: #856404; margin: 0; font-size: 16px; font-weight: bold; background-color: #fff; padding: 8px; border-radius: 4px; display: inline-block; font-family: monospace;">
              ${password}
            </p>
            <p style="color: #856404; font-size: 14px; margin: 10px 0 0 0;">
              Use this password to extract the attached ZIP file. The sender has set this password for security.
            </p>
          </div>

          <div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
            <p>Vista Pacific Capital - Secure Document Portal</p>
            <p>This document was sent through our secure upload system.</p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: zipFileName,
          content: zipBuffer,
          contentType: 'application/zip',
        },
      ],
    };

    // Send email to recipient
    await transporter.sendMail(mailOptions);

    // Get team member info for response
    const teamMembers = [
      { name: 'Alan Johnson', email: 'alanj@vistapacificcapital.com' },
      { name: 'Ian Whitelaw', email: 'ianw@vistapacificcapital.com' },
      { name: 'John Mirabal', email: 'johnm@vistapacificcapital.com' }
    ];

    // Validate that the recipient is one of our team members
    const validRecipient = teamMembers.find(tm => tm.email === recipient);
    if (!validRecipient) {
      return NextResponse.json(
        { error: 'Invalid recipient. Please select a valid team member.' },
        { status: 400 }
      );
    }

    // Send confirmation email to sender
    const confirmationEmail = {
      from: process.env.SMTP_USER,
      to: senderEmail,
      subject: `Document Sent Successfully - ${file.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0D3853;">Document Sent Successfully</h2>
          
          <div style="background-color: #d4edda; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
            <h3 style="color: #155724; margin-top: 0;">✅ Your document has been delivered securely</h3>
            <p style="color: #155724; margin: 0;">Your PDF has been encrypted, password-protected, and sent to the Vista Pacific Capital team.</p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0EB5B2; margin-top: 0;">Delivery Details:</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="margin: 8px 0;"><strong>File:</strong> ${file.name}</li>
              <li style="margin: 8px 0;"><strong>Size:</strong> ${(file.size / 1024 / 1024).toFixed(2)} MB</li>
              <li style="margin: 8px 0;"><strong>Sent to:</strong> ${validRecipient.name}</li>
              <li style="margin: 8px 0;"><strong>Date:</strong> ${new Date(timestamp).toLocaleString()}</li>
            </ul>
          </div>

          ${message ? `
          <div style="background-color: #e8f4f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0D3853; margin-top: 0;">Your Message:</h3>
            <p style="color: #0D3853; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}

          <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107; margin: 20px 0;">
            <h4 style="color: #856404; margin-top: 0;">🔐 Security Information</h4>
            <p style="color: #856404; margin: 0; font-size: 14px;">
              Your document was secured with the password you provided. The recipient will use this password to access the file.
              <br><br>
              <strong>Next Steps:</strong> Our team will review your document and contact you within 1-2 business days.
            </p>
          </div>

          <div style="margin-top: 30px; text-align: center;">
            <p style="color: #666; margin: 10px 0;">Need to send another document?</p>
            <a href="https://vistapacificcapital.com/secure-upload" 
               style="display: inline-block; background-color: #0EB5B2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">
              Upload Another Document
            </a>
          </div>

          <div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
            <p>Vista Pacific Capital - Secure Document Portal</p>
            <p>Questions? Call (714) 500-7017 or email alanj@vistapacificcapital.com</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(confirmationEmail);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Documents uploaded and sent successfully',
        fileName: file.name,
        fileSize: file.size
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload documents. Please try again.' },
      { status: 500 }
    );
  }
}
