import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Guard clause: Only allow data payloads via POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, service, message, phone, urgency } = req.body;

  // Initialize the Gmail secure transporter using the keys you saved in Vercel
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, 
      pass: process.env.GMAIL_APP_PASS, 
    },
  });

  // Construct the structured HTML layout that your client will see in their inbox
  const mailOptions = {
    from: `"Loba Consulting Platform" <${process.env.GMAIL_USER}>`,
    to: process.env.RECIPIENT_EMAIL, 
    subject: `New Request from Loba Consulting: ${service || 'General Inquiry'}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 25px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #2563eb; margin-top: 0; padding-bottom: 12px; border-bottom: 2px solid #f1f5f9;">New Lead Form Submission</h2>
        <p style="margin: 14px 0;"><strong>Client Name:</strong> ${name}</p>
        <p style="margin: 14px 0;"><strong>Email Address:</strong> ${email}</p>
        <p style="margin: 14px 0;"><strong>Phone Number:</strong> ${phone || 'Not provided'}</p>
        <p style="margin: 14px 0;"><strong>Requested Service:</strong> ${service || 'General'}</p>
        <p style="margin: 14px 0;"><strong>Urgency:</strong> ${urgency || 'Not specified'}</p>
        <div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #2563eb;">
          <strong style="display: block; margin-bottom: 6px; color: #475569;">Project Description / Message:</strong>
          <p style="white-space: pre-wrap; margin: 0; font-size: 14px; line-height: 1.6;">${message || 'No specific parameters provided.'}</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Email delivered successfully' });
  } catch (error) {
    console.error('Nodemailer runtime dispatch crash:', error);
    return res.status(500).json({ error: 'Internal system failed to process mail routing' });
  }
}