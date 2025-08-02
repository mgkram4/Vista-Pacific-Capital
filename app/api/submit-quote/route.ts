// app/api/submit-quote/route.ts
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
    console.log('Received quote request data:', body);

    const { name, email, phone, equipmentType, equipmentCost, businessType, timeInBusiness, creditScore } = body;

    // Validate required fields
    if (!name || !email || !phone || !equipmentCost || !businessType) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields. Please fill in all required information.',
          error: 'Validation failed'
        },
        { status: 400 }
      );
    }

    // Email to customer
    const customerEmail = {
      to: email,
      from: 'alanj@vistapacificcapital.com',
      subject: 'Thank You for Your Quote Request - Vista Pacific Capital',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #0D3853;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #0EB5B2; margin-bottom: 10px;">Thank You for Your Quote Request!</h1>
            <p style="font-size: 16px; color: #0D3853;">We have received your equipment financing quote request.</p>
          </div>

          <div style="background-color: #F2F2F2; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #0EB5B2; border-bottom: 1px solid #B3B3B3; padding-bottom: 10px;">Quote Request Summary</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 8px 0; width: 40%;"><strong>Name:</strong></td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Equipment Cost:</strong></td>
                <td style="padding: 8px 0;">${equipmentCost}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Business Type:</strong></td>
                <td style="padding: 8px 0;">${businessType}</td>
              </tr>
              ${equipmentType ? `
              <tr>
                <td style="padding: 8px 0;"><strong>Equipment Type:</strong></td>
                <td style="padding: 8px 0;">${equipmentType}</td>
              </tr>
              ` : ''}
              ${timeInBusiness ? `
              <tr>
                <td style="padding: 8px 0;"><strong>Time in Business:</strong></td>
                <td style="padding: 8px 0;">${timeInBusiness}</td>
              </tr>
              ` : ''}
              ${creditScore ? `
              <tr>
                <td style="padding: 8px 0;"><strong>Credit Score Range:</strong></td>
                <td style="padding: 8px 0;">${creditScore}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <p style="font-size: 16px; line-height: 1.5; margin-bottom: 25px;">
            Our financing team will review your request and contact you within 1 business day with a customized quote and financing options.
          </p>

          <div style="background-color: #0EB5B2; color: white; padding: 15px; border-radius: 5px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">
              If you have any questions, please contact us at 
              <a href="mailto:alanj@vistapacificcapital.com" style="color: white; text-decoration: underline;">alanj@vistapacificcapital.com</a> 
              or call us at (888) 555-1234.
            </p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background-color: #f7f9fc; border-radius: 5px;">
            <h3 style="color: #0D3853; margin-top: 0;">What to Expect Next</h3>
            <ul style="color: #0D3853; line-height: 1.6;">
              <li>Customized financing quote within 1 business day</li>
              <li>Flexible payment terms and competitive rates</li>
              <li>Quick approval process</li>
              <li>Ongoing support throughout your financing</li>
            </ul>
          </div>
        </div>
      `
    };

    // Emails to team members (two recipients)
    const teamEmails = [
      {
        to: 'alanj@vistapacificcapital.com', // First recipient
        from: 'alanj@vistapacificcapital.com',
        subject: 'New Equipment Quote Request',
        html: `
          <h1>New Quote Request</h1>
          <ul>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            <li>Phone: ${phone}</li>
            ${equipmentType ? `<li>Equipment Type: ${equipmentType}</li>` : ''}
            <li>Equipment Cost: ${equipmentCost}</li>
            <li>Business Type: ${businessType}</li>
            ${timeInBusiness ? `<li>Time in Business: ${timeInBusiness}</li>` : ''}
            ${creditScore ? `<li>Credit Score Range: ${creditScore}</li>` : ''}
          </ul>
        `
      },
      {
        to: 'danielm@vistapacificcapital.com', // Second recipient (replace with actual email)
        from: 'alanj@vistapacificcapital.com',
        subject: 'New Equipment Quote Request',
        html: `
          <h1>New Quote Request</h1>
          <ul>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            <li>Phone: ${phone}</li>
            ${equipmentType ? `<li>Equipment Type: ${equipmentType}</li>` : ''}
            <li>Equipment Cost: ${equipmentCost}</li>
            <li>Business Type: ${businessType}</li>
            ${timeInBusiness ? `<li>Time in Business: ${timeInBusiness}</li>` : ''}
            ${creditScore ? `<li>Credit Score Range: ${creditScore}</li>` : ''}
          </ul>
        `
      }
    ];

    console.log('Attempting to send emails...');

    try {
      // Send customer confirmation email
      console.log('Sending customer email...');
      await transporter.sendMail(customerEmail);
      console.log('Customer email sent successfully');

      // Send team emails
      console.log('Sending team emails...');
      for (const teamEmail of teamEmails) {
        await transporter.sendMail(teamEmail);
        console.log(`Team email sent successfully to ${teamEmail.to}`);
      }
    } catch (emailError: any) {
      console.error('Nodemailer Error Details:', {
        message: emailError.message,
        code: emailError.code,
        response: emailError.response,
      });
      
      let errorMessage = 'Error processing your quote request. Please try again later.';
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
        message: 'Quote request submitted successfully'
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error in API route:', {
      message: error.message,
      stack: error.stack,
    });

    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Error processing your request. Please try again later.',
        error: error.message
      },
      { status: 500 }
    );
  }
}
