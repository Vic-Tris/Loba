import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 1. Matched perfectly to your form keys: name, email, urgency, service, context, pageestimate
  const { name, email, urgency, service, context, pageestimate } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, 
      pass: process.env.GMAIL_APP_PASS, 
    },
  });

  const mailOptions = {
    from: `"Loba Consulting Platform" <${process.env.GMAIL_USER}>`,
    to: process.env.RECIPIENT_EMAIL, // This sends it to your client's Gmail!
    subject: `New Request from Loba Consulting: ${service || 'General Inquiry'}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 25px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #2563eb; margin-top: 0; padding-bottom: 12px; border-bottom: 2px solid #f1f5f9;">New Project Submission</h2>
        <p style="margin: 14px 0;"><strong>Client Name:</strong> ${name}</p>
        <p style="margin: 14px 0;"><strong>Email Address:</strong> ${email}</p>
        <p style="margin: 14px 0;"><strong>Urgency/Timeline:</strong> ${urgency || 'Not specified'}</p>
        <p style="margin: 14px 0;"><strong>Requested Service:</strong> ${service || 'General'}</p>
        <p style="margin: 14px 0;"><strong>Page Estimate:</strong> ${pageestimate || 'Not provided'}</p>
        <div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #2563eb;">
          <strong style="display: block; margin-bottom: 6px; color: #475569;">Project Description / Context:</strong>
          <p style="white-space: pre-wrap; margin: 0; font-size: 14px; line-height: 1.6;">${context || 'No specific description provided.'}</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true,  message: 'Email delivered successfully' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}