import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { google } from 'googleapis';

@Injectable()
export class EmailService {
  private oAuth2Client;

  constructor() {
    const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
    const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
    const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
    const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

    this.oAuth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI,
    );
    this.oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  }

  async sendMail(emailData: { name: string; email: string; message: string }) {
    try {
      // Get fresh access token
      const accessTokenResponse = await this.oAuth2Client.getAccessToken();
      const accessToken = accessTokenResponse.token;

      if (!accessToken) {
        throw new Error('Failed to retrieve access token');
      }

      console.log('Access Token retrieved successfully');

      // Create transporter with explicit SMTP settings and timeout configuration
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Use STARTTLS
        auth: {
          type: 'OAuth2',
          user: process.env.GMAIL_USER,
          clientId: process.env.GMAIL_CLIENT_ID,
          clientSecret: process.env.GMAIL_CLIENT_SECRET,
          refreshToken: process.env.GMAIL_REFRESH_TOKEN,
          accessToken: accessToken,
        },
        connectionTimeout: 10000, // 10 seconds
        greetingTimeout: 10000,
        socketTimeout: 10000,
      } as nodemailer.TransportOptions);

      const mailOptions = {
        to: process.env.GMAIL_USER, // Your email
        from: emailData.email, // Sender's email
        subject: `Message from ${emailData.name}`, // Email subject
        text: `You have received a new message from your website contact form.
  
      Name: ${emailData.name}
      Email: ${emailData.email}
      Message: ${emailData.message}`,
      };

      console.log('Sending email with options:', mailOptions);
      const result = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', result);
      
      return result;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
}
