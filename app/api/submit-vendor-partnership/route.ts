// app/api/submit-vendor-partnership/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Readable } from 'stream';

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

interface VendorPartnershipData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
  equipmentType: string;
  averageTicketSize: string;
  monthlyDeals: string;
  yearsInBusiness: string;
  currentFinancingPartners: string;
  partnershipGoals: string;
  additionalInfo: string;
}

// Helper function to convert stream to buffer
async function streamToBuffer(stream: Readable): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Uint8Array[] = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
    stream.on('error', reject);
  });
}

// Helper function to format phone number
const formatPhoneNumber = (phone: string) => {
  const cleaned = ('' + phone).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return phone;
};

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
    console.log('Received vendor partnership data:', body);

    const { companyName, contactName, email, phone, website, equipmentType, averageTicketSize, monthlyDeals, yearsInBusiness, currentFinancingPartners, partnershipGoals, additionalInfo, submissionAgent } = body;

    const formattedPhone = formatPhoneNumber(phone);

    const formData: VendorPartnershipData = {
      companyName,
      contactName,
      email,
      phone: formattedPhone,
      website,
      equipmentType,
      averageTicketSize,
      monthlyDeals,
      yearsInBusiness,
      currentFinancingPartners,
      partnershipGoals,
      additionalInfo,
    };

    console.log('Preparing to send vendor partnership emails');

    // Format the submission date
    const submissionDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Determine team member email based on submission agent
    let teamEmailAddress = 'alanj@vistapacificcapital.com'; // Default to Alan
    let teamMemberName = 'Alan Johnson';
    
    if (submissionAgent && submissionAgent.email) {
      if (submissionAgent.email.toLowerCase() === 'johnm@vistapacificcapital.com') {
        teamEmailAddress = 'johnm@vistapacificcapital.com';
        teamMemberName = 'John Mirabal';
      } else if (submissionAgent.email.toLowerCase() === 'ianw@vistapacificcapital.com') {
        teamEmailAddress = 'ianw@vistapacificcapital.com';
        teamMemberName = 'Ian Whitelaw';
      }
    }

    // Email to vendor (with PDF attachment)
    const vendorEmail = {
      to: formData.email,
      from: 'alanj@vistapacificcapital.com',
      subject: 'Thank You for Your Partnership Interest - Vista Pacific Capital',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #0D3853;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #0EB5B2; margin-bottom: 10px;">Thank You for Your Interest!</h1>
            <p style="font-size: 16px; color: #0D3853;">We have received your partnership inquiry on ${submissionDate}</p>
          </div>

          <div style="background-color: #F2F2F2; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #0EB5B2; border-bottom: 1px solid #B3B3B3; padding-bottom: 10px;">Partnership Inquiry Summary</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 8px 0; width: 40%;"><strong>Company:</strong></td>
                <td style="padding: 8px 0;">${formData.companyName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Contact:</strong></td>
                <td style="padding: 8px 0;">${formData.contactName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Equipment Type:</strong></td>
                <td style="padding: 8px 0;">${formData.equipmentType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Average Ticket Size:</strong></td>
                <td style="padding: 8px 0;">${formData.averageTicketSize}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Monthly Deals:</strong></td>
                <td style="padding: 8px 0;">${formData.monthlyDeals}</td>
              </tr>
              ${formData.yearsInBusiness ? `
              <tr>
                <td style="padding: 8px 0;"><strong>Years in Business:</strong></td>
                <td style="padding: 8px 0;">${formData.yearsInBusiness}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <p style="font-size: 16px; line-height: 1.5; margin-bottom: 25px;">
            Our partnership team will review your information and contact you within 1-2 business days to discuss how we can work together to grow your business.
          </p>

          <div style="background-color: #0EB5B2; color: white; padding: 15px; border-radius: 5px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">
              If you have any questions, please contact ${teamMemberName} at 
              <a href="mailto:${teamEmailAddress}" style="color: white; text-decoration: underline;">${teamEmailAddress}</a> 
              ${submissionAgent && submissionAgent.phone ? `or call ${submissionAgent.phone}` : 'or call (714) 500-7017'}.
            </p>
          </div>

          <div style="margin-top: 20px; padding: 20px; background-color: #f7f9fc; border-radius: 5px;">
            <h3 style="color: #0D3853; margin-top: 0;">What to Expect Next</h3>
            <ul style="color: #0D3853; line-height: 1.6;">
              <li>Initial consultation call within 1-2 business days</li>
              <li>Partnership agreement review and setup</li>
              <li>Co-branded materials and application process setup</li>
              <li>Ongoing support and training for your team</li>
            </ul>
          </div>
        </div>
      `,
    };

    // Format detailed HTML for team emails
    const detailedHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; color: #0D3853;">
        <h1 style="color: #0EB5B2; border-bottom: 2px solid #0EB5B2; padding-bottom: 10px;">New Vendor Partnership Inquiry</h1>
        <p style="font-size: 16px; color: #0D3853;">Submitted on: ${submissionDate}</p>

        <div style="background-color: #F2F2F2; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #0EB5B2; margin-top: 0;">Company Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; width: 250px;"><strong>Company Name:</strong></td>
              <td style="padding: 8px 0;">${formData.companyName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Contact Name:</strong></td>
              <td style="padding: 8px 0;">${formData.contactName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Email:</strong></td>
              <td style="padding: 8px 0;">${formData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Phone:</strong></td>
              <td style="padding: 8px 0;">${formData.phone}</td>
            </tr>
            ${formData.website ? `
            <tr>
              <td style="padding: 8px 0;"><strong>Website:</strong></td>
              <td style="padding: 8px 0;"><a href="${formData.website}" target="_blank">${formData.website}</a></td>
            </tr>
            ` : ''}
            ${formData.yearsInBusiness ? `
            <tr>
              <td style="padding: 8px 0;"><strong>Years in Business:</strong></td>
              <td style="padding: 8px 0;">${formData.yearsInBusiness}</td>
            </tr>
            ` : ''}
          </table>
        </div>

        <div style="background-color: #F2F2F2; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #0EB5B2; margin-top: 0;">Business Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; width: 250px;"><strong>Equipment Type:</strong></td>
              <td style="padding: 8px 0;">${formData.equipmentType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Average Ticket Size:</strong></td>
              <td style="padding: 8px 0;">${formData.averageTicketSize}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Monthly Deals Volume:</strong></td>
              <td style="padding: 8px 0;">${formData.monthlyDeals}</td>
            </tr>
            ${formData.currentFinancingPartners ? `
            <tr>
              <td style="padding: 8px 0;"><strong>Current Partners:</strong></td>
              <td style="padding: 8px 0;">${formData.currentFinancingPartners}</td>
            </tr>
            ` : ''}
          </table>
        </div>

        ${formData.partnershipGoals ? `
        <div style="background-color: #F2F2F2; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #0EB5B2; margin-top: 0;">Partnership Goals</h2>
          <p style="margin: 0; line-height: 1.6;">${formData.partnershipGoals}</p>
        </div>
        ` : ''}

        ${formData.additionalInfo ? `
        <div style="background-color: #F2F2F2; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #0EB5B2; margin-top: 0;">Additional Information</h2>
          <p style="margin: 0; line-height: 1.6;">${formData.additionalInfo}</p>
        </div>
        ` : ''}

        <div style="background-color: #f0f7ff; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #0EB5B2;">
          <h3 style="color: #0D3853; margin-top: 0;">Next Steps</h3>
          <ul style="color: #0D3853; line-height: 1.6;">
            <li>Review vendor profile and business metrics</li>
            <li>Schedule initial consultation call</li>
            <li>Assess partnership fit and potential</li>
            <li>Prepare partnership agreement if suitable</li>
          </ul>
        </div>
      </div>
    `;

    // Common attachment for team emails
    const adminAttachments: any[] = [
    ];

    // Email to team member
    const teamEmail = {
      to: teamEmailAddress,
      from: 'alanj@vistapacificcapital.com',
      subject: `New Vendor Partnership Inquiry - ${formData.companyName}`,
      html: detailedHtml,
      attachments: adminAttachments // Attach PDF file
    };

    console.log('Attempting to send vendor partnership emails...');

    try {
      // Send vendor confirmation email
      console.log('Sending vendor email...');
      await transporter.sendMail(vendorEmail);
      console.log('Vendor email sent successfully');

      // Send team email
      console.log('Sending team email...');
      await transporter.sendMail(teamEmail);
      console.log(`Team email sent successfully to ${teamEmail.to}`);
    } catch (emailError: any) {
      console.error('Nodemailer Error:', {
        message: emailError.message,
        code: emailError.code,
      });
      throw emailError;
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Vendor partnership inquiry submitted successfully'
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error in vendor partnership API route:', {
      message: error.message,
      stack: error.stack,
    });

    return NextResponse.json(
      {
        success: false,
        message: 'Error processing your partnership inquiry. Please try again later.',
        error: error.message
      },
      { status: 500 }
    );
  }
}
