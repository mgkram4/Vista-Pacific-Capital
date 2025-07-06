// app/api/submit-loan-application/route.ts
import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

// Initialize SendGrid with your API key
if (!process.env.SENDGRID_API_KEY) {
  console.error('SENDGRID_API_KEY is not defined in environment variables');
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

interface BusinessData {
  amountNeeded: string;
  email: string;
  businessName: string;
  businessType: string;
  businessPhone: string;
  businessAddress: string;
  businessSuite: string;
  city: string;
  state: string;
  zip: string;
  yearsInBusiness: string;
  annualRevenue: string;
  federalTaxId: string;
  equipmentDescription: string;
}

interface OwnerData {
  firstName: string;
  lastName: string;
  socialSecurityNumber: string;
  ownershipPercentage: string;
  dateOfBirth: string;
  homeAddress: string;
  homeSuite: string;
  homeCity: string;
  homeState: string;
  homeZip: string;
}

interface AdditionalOwner {
  firstName: string;
  lastName: string;
  socialSecurityNumber: string;
  ownershipPercentage: string;
  dateOfBirth: string;
  homeAddress: string;
  homeSuite: string;
  homeCity: string;
  homeState: string;
  homeZip: string;
}

interface AgentData {
  name: string;
  email: string;
  phone: string;
}

export async function POST(request: Request) {
  try {
    // Parse the JSON body
    const body = await request.json();
    console.log('Received finance application data:', body);

    const {
      business,
      primaryOwner,
      additionalOwners,
      pdfAttachment,
      agent
    } = body;

    const businessData: BusinessData = business;
    const ownerData: OwnerData = primaryOwner;
    const agentData: AgentData | null = agent;

    console.log('Preparing to send finance application emails');

    // Format business address
    const businessAddress = `${businessData.businessAddress}${businessData.businessSuite ? ', Suite ' + businessData.businessSuite : ''}, ${businessData.city}, ${businessData.state} ${businessData.zip}`;
    
    // Format owner address
    const ownerAddress = `${ownerData.homeAddress}${ownerData.homeSuite ? ', Suite ' + ownerData.homeSuite : ''}, ${ownerData.homeCity}, ${ownerData.homeState} ${ownerData.homeZip}`;

    // Create a formatted HTML table for additional owners (if any)
    let additionalOwnersHtml = '';
    if (additionalOwners && additionalOwners.length > 0) {
      additionalOwnersHtml = `
        <h2>Additional Owners:</h2>
        <table border="1" cellpadding="5" style="border-collapse: collapse; width: 100%;">
          <tr>
            <th>Name</th>
            <th>SSN</th>
            <th>Ownership %</th>
            <th>Date of Birth</th>
            <th>Address</th>
          </tr>
      `;
      
      additionalOwners.forEach((owner: AdditionalOwner, index: number) => {
        const ownerFullName = `${owner.firstName} ${owner.lastName}`;
        const ownerFullAddress = `${owner.homeAddress}${owner.homeSuite ? ', Suite ' + owner.homeSuite : ''}, ${owner.homeCity}, ${owner.homeState} ${owner.homeZip}`;
        
        additionalOwnersHtml += `
          <tr>
            <td>${ownerFullName}</td>
            <td>${owner.socialSecurityNumber}</td>
            <td>${owner.ownershipPercentage}%</td>
            <td>${owner.dateOfBirth}</td>
            <td>${ownerFullAddress}</td>
          </tr>
        `;
      });
      
      additionalOwnersHtml += `</table>`;
    }

    // Format the application date
    const applicationDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Generate filename for PDF attachment
    const filename = `${businessData.businessName.replace(/\s+/g, '_')}_finance_application_${applicationDate.replace(/\s+/g, '_').replace(/,/g, '')}.pdf`;

    // Email to customer with PDF attachment
    const customerEmail = {
      to: businessData.email,
      from: agentData ? agentData.email : 'alanj@vistapacificcapital.com',
      subject: 'Your Vista Pacific Capital Finance Application',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #0D3853;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #0EB5B2; margin-bottom: 10px;">Thank You for Your Application</h1>
            <p style="font-size: 16px; color: #0D3853;">We have received your finance application on ${applicationDate}</p>
          </div>

          <div style="background-color: #F2F2F2; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #0EB5B2; border-bottom: 1px solid #B3B3B3; padding-bottom: 10px;">Application Summary</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 8px 0; width: 40%;"><strong>Business Name:</strong></td>
                <td style="padding: 8px 0;">${businessData.businessName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Amount Requested:</strong></td>
                <td style="padding: 8px 0;">$${parseFloat(businessData.amountNeeded.replace(/[^0-9.-]+/g, '')).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
              </tr>
              ${businessData.equipmentDescription ? `
              <tr>
                <td style="padding: 8px 0;"><strong>Equipment:</strong></td>
                <td style="padding: 8px 0;">${businessData.equipmentDescription}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0;"><strong>Business Type:</strong></td>
                <td style="padding: 8px 0;">${businessData.businessType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Years in Business:</strong></td>
                <td style="padding: 8px 0;">${businessData.yearsInBusiness}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Annual Revenue:</strong></td>
                <td style="padding: 8px 0;">${businessData.annualRevenue}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Business Phone:</strong></td>
                <td style="padding: 8px 0;">${businessData.businessPhone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Business Address:</strong></td>
                <td style="padding: 8px 0;">${businessAddress}</td>
              </tr>
            </table>
          </div>

          <p style="font-size: 16px; line-height: 1.5; margin-bottom: 25px;">A PDF copy of your complete application is attached to this email for your records. Our team will review your application and contact you shortly to discuss the next steps.</p>

          ${agentData ? `
          <div style="background-color: #f7f9fc; border: 1px solid #e1e6ed; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h3 style="color: #0D3853; margin-top: 0; font-size: 16px;">Your Assigned Agent</h3>
            <p style="margin: 5px 0; font-size: 14px;"><strong>${agentData.name}</strong></p>
            <p style="margin: 5px 0; font-size: 14px;">Email: ${agentData.email}</p>
            <p style="margin: 5px 0; font-size: 14px;">Phone: ${agentData.phone}</p>
          </div>
          ` : ''}

          <div style="background-color: #0EB5B2; color: white; padding: 15px; border-radius: 5px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">If you have any questions, please contact us at <a href="mailto:${agentData ? agentData.email : 'alanj@vistapacificcapital.com'}" style="color: white; text-decoration: underline;">${agentData ? agentData.email : 'alanj@vistapacificcapital.com'}</a> or call us at ${agentData ? agentData.phone : '(888) 555-1234'}.</p>
          </div>
        </div>
      `,
      attachments: [
        {
          content: pdfAttachment,
          filename: filename,
          type: 'application/pdf',
          disposition: 'attachment',
        },
      ],
    };

    // Format detailed HTML for team emails with all application details
    const detailedHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; color: #0D3853;">
        <h1 style="color: #0EB5B2; border-bottom: 2px solid #0EB5B2; padding-bottom: 10px;">New Finance Application</h1>
        <p style="font-size: 16px; color: #0D3853;">Submitted on: ${applicationDate}</p>

        ${agentData ? `
        <div style="background-color: #f0f7ff; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #0EB5B2;">
          <h3 style="color: #0D3853; margin-top: 0; font-size: 16px;">Assigned Agent: ${agentData.name}</h3>
          <p style="margin: 5px 0; font-size: 14px;">${agentData.email} | ${agentData.phone}</p>
        </div>
        ` : ''}

        <div style="background-color: #F2F2F2; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #0EB5B2; margin-top: 0;">Business Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; width: 250px;"><strong>Business Name:</strong></td>
              <td style="padding: 8px 0;">${businessData.businessName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Amount Requested:</strong></td>
              <td style="padding: 8px 0;">$${parseFloat(businessData.amountNeeded.replace(/[^0-9.-]+/g, '')).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
            </tr>
            ${businessData.equipmentDescription ? `
            <tr>
              <td style="padding: 8px 0;"><strong>Equipment:</strong></td>
              <td style="padding: 8px 0;">${businessData.equipmentDescription}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0;"><strong>Business Type:</strong></td>
              <td style="padding: 8px 0;">${businessData.businessType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Years in Business:</strong></td>
              <td style="padding: 8px 0;">${businessData.yearsInBusiness}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Annual Revenue:</strong></td>
              <td style="padding: 8px 0;">${businessData.annualRevenue}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Email:</strong></td>
              <td style="padding: 8px 0;">${businessData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Business Phone:</strong></td>
              <td style="padding: 8px 0;">${businessData.businessPhone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Business Address:</strong></td>
              <td style="padding: 8px 0;">${businessAddress}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #F2F2F2; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #0EB5B2; margin-top: 0;">Primary Owner Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; width: 250px;"><strong>Name:</strong></td>
              <td style="padding: 8px 0;">${ownerData.firstName} ${ownerData.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Social Security Number:</strong></td>
              <td style="padding: 8px 0;">${ownerData.socialSecurityNumber}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Federal Tax ID:</strong></td>
              <td style="padding: 8px 0;">${businessData.federalTaxId || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Ownership Percentage:</strong></td>
              <td style="padding: 8px 0;">${ownerData.ownershipPercentage}%</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Date of Birth:</strong></td>
              <td style="padding: 8px 0;">${ownerData.dateOfBirth}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Home Address:</strong></td>
              <td style="padding: 8px 0;">${ownerAddress}</td>
            </tr>
          </table>
        </div>

        ${additionalOwnersHtml}
      </div>
    `;

    // Determine team emails list based on assigned agent
    let teamEmails = [];
    if (agentData) {
      // Include the agent's email
      teamEmails.push({
        to: agentData.email,
        from: 'alanj@vistapacificcapital.com',
        subject: `New Finance Application - ${businessData.businessName}`,
        html: detailedHtml,
        attachments: [
          {
            content: pdfAttachment,
            filename: filename,
            type: 'application/pdf',
            disposition: 'attachment',
          },
        ],
      });
      
      // Always include Daniel as a backup
      if (agentData.email !== 'danielm@vistapacificcapital.com') {
        teamEmails.push({
          to: 'danielm@vistapacificcapital.com',
          from: 'alanj@vistapacificcapital.com',
          subject: `New Finance Application (${agentData.name}) - ${businessData.businessName}`,
          html: detailedHtml,
          attachments: [
            {
              content: pdfAttachment,
              filename: filename,
              type: 'application/pdf',
              disposition: 'attachment',
            },
          ],
        });
      }
    } else {
      // Default team emails if no agent specified
      teamEmails = [
        'alanj@vistapacificcapital.com',
        'danielm@vistapacificcapital.com'
      ].map(recipient => ({
        to: recipient,
        from: 'alanj@vistapacificcapital.com',
        subject: `New Finance Application - ${businessData.businessName}`,
        html: detailedHtml,
        attachments: [
          {
            content: pdfAttachment,
            filename: filename,
            type: 'application/pdf',
            disposition: 'attachment',
          },
        ],
      }));
    }

    console.log('Attempting to send finance application emails...');

    try {
      // Send customer confirmation email with PDF
      console.log('Sending customer email with PDF...');
      await sgMail.send(customerEmail);
      console.log('Customer email with PDF sent successfully');

      // Send team emails with PDF
      console.log('Sending team emails with PDF...');
      for (const teamEmail of teamEmails) {
        await sgMail.send(teamEmail);
        console.log(`Team email with PDF sent successfully to ${teamEmail.to}`);
      }
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
        message: 'Error processing your finance application. Please try again later.',
        error: error.message
      },
      { status: 500 }
    );
  }
}