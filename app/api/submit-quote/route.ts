// app/api/submit-quote/route.ts

import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

// Initialize SendGrid with your API key
if (!process.env.SENDGRID_API_KEY) {
  console.error('SENDGRID_API_KEY is not defined in environment variables');
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    // Parse the JSON body
    const body = await request.json();
    console.log('Received form data:', body);

    const {
      equipmentType,
      equipmentCost,
      businessType,
      timeInBusiness,
      creditScore,
      name,
      email,
      phone
    } = body;

    console.log('Preparing to send emails to:', email);

    // Email to customer
    const customerEmail = {
      to: email,
      from: 'mark.garcia4@laverne.edu', // Make sure this email is verified in SendGrid
      subject: 'Your Equipment Quote Request',
      html: `
        <h1>Thank you for your quote request, ${name}!</h1>
        <p>We have received your request for the following:</p>
        <ul>
          ${equipmentType ? `<li>Equipment Type: ${equipmentType}</li>` : ''}
          <li>Equipment Cost: ${equipmentCost}</li>
          <li>Business Type: ${businessType}</li>
          ${timeInBusiness ? `<li>Time in Business: ${timeInBusiness}</li>` : ''}
          ${creditScore ? `<li>Credit Score Range: ${creditScore}</li>` : ''}
        </ul>
        <p>We will review your information and get back to you shortly.</p>
      `
    };

    // Email to your team
    const teamEmail = {
      to: 'mark.garcia4@laverne.edu', // Make sure this is the correct team email
      from: 'mark.garcia4@laverne.edu', // Must be verified in SendGrid
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
    };

    console.log('Attempting to send emails...');

    try {
      // Send emails one at a time to better identify which one might fail
      console.log('Sending customer email...');
      await sgMail.send(customerEmail);
      console.log('Customer email sent successfully');

      console.log('Sending team email...');
      await sgMail.send(teamEmail);
      console.log('Team email sent successfully');

    } catch (emailError: any) {
      console.error('SendGrid Error:', {
        message: emailError.message,
        response: emailError.response?.body,
        code: emailError.code,
      });
      throw emailError;
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
        message: 'Error processing your request. Please try again later.',
        error: error.message
      },
      { status: 500 }
    );
  }
}