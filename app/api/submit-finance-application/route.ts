// app/api/submit-loan-application/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface BusinessData {
  amountNeeded: string;
  businessName: string;
  businessType: string;
  timeInBusiness: string;
  annualRevenue: string;
  creditScore: string;
  equipmentType: string;
  equipmentCost: string;
  downPayment: string;
  termLength: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  ssn: string;
  dateOfBirth: string;
  additionalInfo: string;
}

export async function POST(request: Request) {
  try {
    // Check if SMTP is properly configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP configuration is missing in environment variables');
      return NextResponse.json(
        {
          success: false,
          message: 'Email service is not configured. Please contact support.',
          error: 'SMTP configuration not found'
        },
        { status: 500 }
      );
    }

    // Parse the JSON body
    const body = await request.json();
    console.log('Received finance application data:', body);

    const formData: BusinessData = body;

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.amountNeeded || !formData.businessName || !formData.businessType) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields. Please fill in all required information.',
          error: 'Validation failed'
        },
        { status: 400 }
      );
    }

    // Format the submission date
    const submissionDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Email to customer - Customized auto-response based on team member
    const submissionAgent = body.agent;
    let responseMessage = '';
    let contactName = 'Alan Johnson';
    let contactEmail = 'alanj@vistapacificcapital.com';
    let contactPhone = '(714) 500-7017';
    
    if (submissionAgent && submissionAgent.email) {
      if (submissionAgent.email.toLowerCase() === 'johnm@vistapacificcapital.com') {
        contactName = 'John Mirabal';
        contactEmail = 'johnm@vistapacificcapital.com';
        contactPhone = '(714) 551-9955';
        responseMessage = `Thank you for submitting your application. I will get back to you shortly. If you have any questions please contact me. John Mirabal, sales representative, <a href="mailto:${contactEmail}" style="color: #0EB5B2; text-decoration: underline;">${contactEmail}</a>, phone <a href="tel:+17145519955" style="color: #0EB5B2; text-decoration: underline;">${contactPhone}</a>.`;
      } else if (submissionAgent.email.toLowerCase() === 'ianw@vistapacificcapital.com') {
        contactName = 'Ian Whitelaw';
        contactEmail = 'ianw@vistapacificcapital.com';
        contactPhone = '(714) 408-4574';
        responseMessage = `Thank you for submitting your application. I will get back to you shortly. If you have any questions please contact me. Ian Whitelaw, sales representative, <a href="mailto:${contactEmail}" style="color: #0EB5B2; text-decoration: underline;">${contactEmail}</a>, phone <a href="tel:+17144084574" style="color: #0EB5B2; text-decoration: underline;">${contactPhone}</a>.`;
      } else {
        // Default to Alan
        responseMessage = `Thank you for submitting your application. I will get back to you shortly. If you have any questions please contact Alan Johnson, <a href="mailto:${contactEmail}" style="color: #0EB5B2; text-decoration: underline;">${contactEmail}</a>, phone <a href="tel:+17145007017" style="color: #0EB5B2; text-decoration: underline;">${contactPhone}</a>.`;
      }
    } else {
      // Default to Alan for general submissions
      responseMessage = `Thank you for submitting your application. I will get back to you shortly. If you have any questions please contact Alan Johnson, <a href="mailto:${contactEmail}" style="color: #0EB5B2; text-decoration: underline;">${contactEmail}</a>, phone <a href="tel:+17145007017" style="color: #0EB5B2; text-decoration: underline;">${contactPhone}</a>.`;
    }

    const customerEmail = {
      to: formData.email,
      from: contactEmail,
      subject: 'Thank You for Your Finance Application - Vista Pacific Capital',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #0D3853;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #0EB5B2; margin-bottom: 10px;">Vista Pacific Capital</h1>
          </div>

          <p style="font-size: 16px; line-height: 1.5; margin-bottom: 25px;">
            ${responseMessage}
          </p>

          ${body.pdfAttachment ? `
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0EB5B2;">
            <h3 style="color: #0D3853; margin-top: 0;">📄 Your Application Copy</h3>
            <p style="color: #0D3853; margin: 0;">
              A copy of your completed application is attached to this email for your records.
            </p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; text-align: center; color: #666; font-size: 12px;">
            <p>Vista Pacific Capital - Equipment Financing</p>
            <p><a href="https://www.vistapacificcapital.com" style="color: #0EB5B2;">www.vistapacificcapital.com</a></p>
          </div>
        </div>
      `,
      attachments: [] as any[] // Will add PDF attachment below if available
    };

    // Generate detailed HTML for team emails
    const detailedHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; color: #0D3853;">
        <h1 style="color: #0EB5B2; border-bottom: 2px solid #0EB5B2; padding-bottom: 10px;">New Finance Application</h1>
        <p style="font-size: 16px; color: #0D3853;">Submitted on: ${submissionDate}</p>

        <div style="background-color: #F2F2F2; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #0EB5B2; margin-top: 0;">Applicant Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; width: 250px;"><strong>Name:</strong></td>
              <td style="padding: 8px 0;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Email:</strong></td>
              <td style="padding: 8px 0;">${formData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Phone:</strong></td>
              <td style="padding: 8px 0;">${formData.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Address:</strong></td>
              <td style="padding: 8px 0;">${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Date of Birth:</strong></td>
              <td style="padding: 8px 0;">${formData.dateOfBirth}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #F2F2F2; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #0EB5B2; margin-top: 0;">Business Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; width: 250px;"><strong>Business Name:</strong></td>
              <td style="padding: 8px 0;">${formData.businessName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Business Type:</strong></td>
              <td style="padding: 8px 0;">${formData.businessType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Time in Business:</strong></td>
              <td style="padding: 8px 0;">${formData.timeInBusiness}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Annual Revenue:</strong></td>
              <td style="padding: 8px 0;">${formData.annualRevenue}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Credit Score:</strong></td>
              <td style="padding: 8px 0;">${formData.creditScore}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #F2F2F2; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #0EB5B2; margin-top: 0;">Financing Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; width: 250px;"><strong>Amount Needed:</strong></td>
              <td style="padding: 8px 0;">${formData.amountNeeded}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Equipment Type:</strong></td>
              <td style="padding: 8px 0;">${formData.equipmentType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Equipment Cost:</strong></td>
              <td style="padding: 8px 0;">${formData.equipmentCost}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Down Payment:</strong></td>
              <td style="padding: 8px 0;">${formData.downPayment}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Term Length:</strong></td>
              <td style="padding: 8px 0;">${formData.termLength}</td>
            </tr>
          </table>
        </div>

        ${formData.additionalInfo ? `
        <div style="background-color: #F2F2F2; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #0EB5B2; margin-top: 0;">Additional Information</h2>
          <p style="margin: 0; line-height: 1.6;">${formData.additionalInfo}</p>
        </div>
        ` : ''}

        <div style="background-color: #f0f7ff; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #0EB5B2;">
          <h3 style="color: #0D3853; margin-top: 0;">Next Steps</h3>
          <ul style="color: #0D3853; line-height: 1.6;">
            <li>Review application and credit information</li>
            <li>Contact applicant for additional documentation if needed</li>
            <li>Prepare financing terms and approval</li>
            <li>Schedule closing and funding</li>
          </ul>
        </div>
      </div>
    `;

    // Generate HTML for admin attachment
    const adminAttachmentHtml = `
      <!DOCTYPE html>
      <html>
      <head>
          <title>Finance Application - ${formData.name}</title>
          <style>
              body { font-family: Arial, sans-serif; color: #0D3853; margin: 20px; }
              h1 { color: #0EB5B2; border-bottom: 2px solid #0EB5B2; padding-bottom: 10px; }
              h2 { color: #0EB5B2; margin-top: 20px; }
              table { width: 100%; border-collapse: collapse; margin-top: 10px; }
              th, td { padding: 8px; border: 1px solid #ddd; text-align: left; }
              th { background-color: #f2f2f2; }
              .section { background-color: #f7f9fc; padding: 15px; border-radius: 5px; margin-bottom: 15px; border-left: 4px solid #0EB5B2; }
              .field-label { font-weight: bold; width: 200px; }
          </style>
      </head>
      <body>
          <h1>New Finance Application</h1>
          <p>Submitted on: ${submissionDate}</p>

          <div class="section">
              <h2>Applicant Information</h2>
              <table>
                  <tr><td class="field-label">Name:</td><td>${formData.name}</td></tr>
                  <tr><td class="field-label">Email:</td><td>${formData.email}</td></tr>
                  <tr><td class="field-label">Phone:</td><td>${formData.phone}</td></tr>
                  <tr><td class="field-label">Address:</td><td>${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}</td></tr>
                  <tr><td class="field-label">Date of Birth:</td><td>${formData.dateOfBirth}</td></tr>
              </table>
          </div>

          <div class="section">
              <h2>Business Information</h2>
              <table>
                  <tr><td class="field-label">Business Name:</td><td>${formData.businessName}</td></tr>
                  <tr><td class="field-label">Business Type:</td><td>${formData.businessType}</td></tr>
                  <tr><td class="field-label">Time in Business:</td><td>${formData.timeInBusiness}</td></tr>
                  <tr><td class="field-label">Annual Revenue:</td><td>${formData.annualRevenue}</td></tr>
                  <tr><td class="field-label">Credit Score:</td><td>${formData.creditScore}</td></tr>
              </table>
          </div>

          <div class="section">
              <h2>Financing Details</h2>
              <table>
                  <tr><td class="field-label">Amount Needed:</td><td>${formData.amountNeeded}</td></tr>
                  <tr><td class="field-label">Equipment Type:</td><td>${formData.equipmentType}</td></tr>
                  <tr><td class="field-label">Equipment Cost:</td><td>${formData.equipmentCost}</td></tr>
                  <tr><td class="field-label">Down Payment:</td><td>${formData.downPayment}</td></tr>
                  <tr><td class="field-label">Term Length:</td><td>${formData.termLength}</td></tr>
              </table>
          </div>

          ${formData.additionalInfo ? `
          <div class="section">
              <h2>Additional Information</h2>
              <p>${formData.additionalInfo}</p>
          </div>
          ` : ''}
          
          <div class="section">
              <h2>Next Steps for Internal Team</h2>
              <ul>
                  <li>Review application and credit information</li>
                  <li>Contact applicant for additional documentation if needed</li>
                  <li>Prepare financing terms and approval</li>
                  <li>Schedule closing and funding</li>
              </ul>
          </div>
      </body>
      </html>
    `;

    // Common attachment for team emails
    const adminAttachments: any[] = [
      {
        content: adminAttachmentHtml,
        filename: `${formData.name.replace(/\s+/g, '_')}_finance_application_${submissionDate.replace(/\s+/g, '_').replace(/,/g, '')}.html`,
        contentType: 'text/html',
        contentDisposition: 'attachment',
      },
    ];

    // Emails to team members
    // Determine the primary recipient and CC list
    let primaryTo = 'alanj@vistapacificcapital.com'; // Default to Alan
    let ccList: string[] = [];

    if (submissionAgent && submissionAgent.email) {
      primaryTo = submissionAgent.email;
      // Add Alan to CC if he's not the primary recipient
      if (submissionAgent.email.toLowerCase() !== 'alanj@vistapacificcapital.com') {
        ccList = ['alanj@vistapacificcapital.com'];
      }
    } else {
      // If no agent, Alan is the primary, so no CC needed
      ccList = [];
    }

    const teamEmailOptions = {
      to: primaryTo,
      cc: ccList,
      from: 'alanj@vistapacificcapital.com',
      subject: `New Finance Application - ${formData.name}`,
      html: detailedHtml,
      attachments: adminAttachments
    };
    
    // Check for PDF attachment and add it to both customer and team emails
    if (body.pdfAttachment) {
      const pdfAttachment = {
        filename: `${formData.name.replace(/\s+/g, '_')}_application.pdf`,
        content: body.pdfAttachment,
        encoding: 'base64',
        contentType: 'application/pdf',
      };
      
      // Add PDF to customer email
      customerEmail.attachments.push(pdfAttachment);
      
      // Add PDF to team email
      teamEmailOptions.attachments.push(pdfAttachment);
    }


    console.log('Attempting to send finance application emails...');

    try {
      // Send customer confirmation email
      console.log('Sending customer email...');
      await transporter.sendMail(customerEmail);
      console.log('Customer email sent successfully');

      // Send single email to the team (primary + cc)
      console.log(`Sending team email to: ${primaryTo} (CC: ${ccList.join(', ')})`);
      await transporter.sendMail(teamEmailOptions);
      console.log('Team email sent successfully');

    } catch (emailError: any) {
      console.error('Nodemailer Error Details:', {
        message: emailError.message,
        code: emailError.code,
        response: emailError.response,
      });
      
      let errorMessage = 'Error processing your finance application. Please try again later.';
      if (emailError.code === 'EAUTH') {
        errorMessage = 'Email service authentication failed. Please contact support.';
      } else if (emailError.code === 'ECONNREFUSED') {
        errorMessage = 'Email service connection refused. Please contact support.';
      }
      
      throw new Error(errorMessage);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Finance application submitted successfully'
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error in finance application API route:', {
      message: error.message,
      stack: error.stack,
    });

    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Error processing your finance application. Please try again later.',
        error: error.message
      },
      { status: 500 }
    );
  }
}
