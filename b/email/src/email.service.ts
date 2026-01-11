import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class EmailService {
  constructor() {
    // Initialize SendGrid with API key from environment
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      console.error('SENDGRID_API_KEY is not set in environment variables');
    } else {
      sgMail.setApiKey(apiKey);
      console.log('SendGrid initialized successfully');
    }
  }

  async sendMail(emailData: { name: string; email: string; message: string }) {
    try {
      const msg = {
        to: process.env.RECIPIENT_EMAIL || process.env.GMAIL_USER, // Your email
        from: process.env.SENDGRID_FROM_EMAIL, // Must be verified in SendGrid
        replyTo: emailData.email, // User's email for easy reply
        subject: `Portfolio Contact: Message from ${emailData.name}`,
        text: `You have received a new message from your portfolio contact form.

Name: ${emailData.name}
Email: ${emailData.email}

Message:
${emailData.message}

---
Reply directly to this email to respond to ${emailData.name}.`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Message</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <p><strong>From:</strong> ${emailData.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${emailData.email}">${emailData.email}</a></p>
            </div>
            <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${emailData.message}</p>
            </div>
            <p style="color: #666; font-size: 12px; margin-top: 20px;">
              Reply directly to this email to respond to ${emailData.name}.
            </p>
          </div>
        `,
      };

      console.log('Sending email via SendGrid to:', msg.to);
      const result = await sgMail.send(msg);
      console.log('Email sent successfully via SendGrid:', result[0].statusCode);
      
      return {
        success: true,
        messageId: result[0].headers['x-message-id'],
      };
    } catch (error) {
      console.error('SendGrid error:', error);
      
      // SendGrid errors have a response property with details
      if (error.response) {
        console.error('SendGrid error details:', error.response.body);
      }
      
      throw error;
    }
  }
}
