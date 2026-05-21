import nodemailer from 'nodemailer';

export const handler = async (event) => {
  // Ensure we only process POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Netlify passes the body parameters as a raw string inside event.body
    const data = JSON.parse(event.body || '{}');
    const { name, email, service, urgency, context, pageestimate, message, phone } = data;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    const mailOptions = {
      from: `"Loba Consulting Platform" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL, // Your client's target inbox
      subject: `New Request from Loba Consulting: ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 25px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #2563eb; margin-top: 0; padding-bottom: 12px; border-bottom: 2px solid #f1f5f9;">New Lead Submission</h2>
          <p style="margin: 14px 0;"><strong>Client Name:</strong> ${name || 'N/A'}</p>
          <p style="margin: 14px 0;"><strong>Phone Number:</strong> ${phone || 'N/A'}</p>
          <p style="margin: 14px 0;"><strong>Email Address:</strong> ${email || 'N/A'}</p>
          <p style="margin: 14px 0;"><strong>Requested Service:</strong> ${service || 'General'}</p>
          <p style="margin: 14px 0;"><strong>Urgency/Timeline:</strong> ${urgency || 'Not specified'}</p>
          <p style="margin: 14px 0;"><strong>Page Estimate:</strong> ${pageestimate || 'Not provided'}</p>
          <div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #2563eb;">
            <strong style="display: block; margin-bottom: 6px; color: #475569;">Message / Context:</strong>
            <p style="white-space: pre-wrap; margin: 0; font-size: 14px; line-height: 1.6;">${context || message || 'No description provided.'}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, message: 'Email delivered successfully' }),
    };

  } catch (error) {
    console.error('Nodemailer Error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Internal server failed to send email', details: error.message }),
    };
  }
};