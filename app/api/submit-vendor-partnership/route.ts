// app/api/submit-vendor-partnership/route.ts
import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

// Initialize SendGrid with your API key
if (!process.env.SENDGRID_API_KEY) {
  console.error('SENDGRID_API_KEY is not defined in environment variables');
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

interface VendorPartnershipData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
  equipmentTypes: string[];
  averageDealSize: string;
  monthlyDeals: string;
  yearsInBusiness: string;
  currentFinancingPartners: string;
  partnershipGoals: string;
  additionalInfo: string;
}

export async function POST(request: Request) {
  try {
    // Parse the JSON body
    const body = await request.json();
    console.log('Received vendor partnership data:', body);

    const { companyName, contactName, email, phone, website, equipmentTypes, averageDealSize, monthlyDeals, yearsInBusiness, currentFinancingPartners, partnershipGoals, additionalInfo } = body;

    const formData: VendorPartnershipData = {
      companyName,
      contactName,
      email,
      phone,
      website,
      equipmentTypes,
      averageDealSize,
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

    // Email to vendor (no attachment)
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
                <td style="padding: 8px 0;"><strong>Equipment Types:</strong></td>
                <td style="padding: 8px 0;">${formData.equipmentTypes.join(', ')}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Average Deal Size:</strong></td>
                <td style="padding: 8px 0;">${formData.averageDealSize}</td>
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
              If you have any questions, please contact us at 
              <a href="mailto:alanj@vistapacificcapital.com" style="color: white; text-decoration: underline;">alanj@vistapacificcapital.com</a> 
              or call us at (888) 555-1234.
            </p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background-color: #f7f9fc; border-radius: 5px;">
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
      attachments: [] // No attachments for the vendor
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
              <td style="padding: 8px 0; width: 250px;"><strong>Equipment Types:</strong></td>
              <td style="padding: 8px 0;">${formData.equipmentTypes.join(', ')}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Average Deal Size:</strong></td>
              <td style="padding: 8px 0;">${formData.averageDealSize}</td>
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

    // Generate HTML for admin attachment
    const adminAttachmentHtml = `
      <!DOCTYPE html>
      <html>
      <head>
          <title>Vendor Partnership Inquiry - ${formData.companyName}</title>
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
          <h1>New Vendor Partnership Inquiry</h1>
          <p>Submitted on: ${submissionDate}</p>

          <div class="section">
              <h2>Company Information</h2>
              <table>
                  <tr><td class="field-label">Company Name:</td><td>${formData.companyName}</td></tr>
                  <tr><td class="field-label">Contact Name:</td><td>${formData.contactName}</td></tr>
                  <tr><td class="field-label">Email:</td><td>${formData.email}</td></tr>
                  <tr><td class="field-label">Phone:</td><td>${formData.phone}</td></tr>
                  ${formData.website ? `<tr><td class="field-label">Website:</td><td><a href="${formData.website}" target="_blank">${formData.website}</a></td></tr>` : ''}
                  ${formData.yearsInBusiness ? `<tr><td class="field-label">Years in Business:</td><td>${formData.yearsInBusiness}</td></tr>` : ''}
              </table>
          </div>

          <div class="section">
              <h2>Business Details</h2>
              <table>
                  <tr><td class="field-label">Equipment Types:</td><td>${formData.equipmentTypes.join(', ')}</td></tr>
                  <tr><td class="field-label">Average Deal Size:</td><td>${formData.averageDealSize}</td></tr>
                  <tr><td class="field-label">Monthly Deals Volume:</td><td>${formData.monthlyDeals}</td></tr>
                  ${formData.currentFinancingPartners ? `<tr><td class="field-label">Current Partners:</td><td>${formData.currentFinancingPartners}</td></tr>` : ''}
              </table>
          </div>

          ${formData.partnershipGoals ? `
          <div class="section">
              <h2>Partnership Goals</h2>
              <p>${formData.partnershipGoals}</p>
          </div>
          ` : ''}

          ${formData.additionalInfo ? `
          <div class="section">
              <h2>Additional Information</h2>
              <p>${formData.additionalInfo}</p>
          </div>
          ` : ''}
          
          <div class="section">
              <h2>Next Steps for Internal Team</h2>
              <ul>
                  <li>Review vendor profile and business metrics</li>
                  <li>Schedule initial consultation call</li>
                  <li>Assess partnership fit and potential</li>
                  <li>Prepare partnership agreement if suitable</li>
              </ul>
          </div>
      </body>
      </html>
    `;

    // Common attachment for team emails
    const adminAttachments = [
      {
        content: Buffer.from(adminAttachmentHtml).toString('base64'),
        filename: `${formData.companyName.replace(/\s+/g, '_')}_partnership_inquiry_${submissionDate.replace(/\s+/g, '_').replace(/,/g, '')}.html`,
        type: 'text/html',
        disposition: 'attachment',
      },
    ];

    // Emails to team members
    const teamEmails = [
      {
        to: 'alanj@vistapacificcapital.com',
        from: 'alanj@vistapacificcapital.com',
        subject: `New Vendor Partnership Inquiry - ${formData.companyName}`,
        html: detailedHtml,
        attachments: adminAttachments // Attach HTML file
      },
      {
        to: 'danielm@vistapacificcapital.com',
        from: 'alanj@vistapacificcapital.com',
        subject: `New Vendor Partnership Inquiry - ${formData.companyName}`,
        html: detailedHtml,
        attachments: adminAttachments // Attach HTML file
      },
      {
        to: 'cynthiaj@vistapacificcapital.com',
        from: 'alanj@vistapacificcapital.com',
        subject: `New Vendor Partnership Inquiry - ${formData.companyName}`,
        html: detailedHtml,
        attachments: adminAttachments // Attach HTML file
      }
    ];

    console.log('Attempting to send vendor partnership emails...');

    try {
      // Send vendor confirmation email
      console.log('Sending vendor email...');
      await sgMail.send(vendorEmail);
      console.log('Vendor email sent successfully');

      // Send team emails
      console.log('Sending team emails...');
      for (const teamEmail of teamEmails) {
        await sgMail.send(teamEmail);
        console.log(`Team email sent successfully to ${teamEmail.to}`);
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