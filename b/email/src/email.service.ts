import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { google } from 'googleapis';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
    const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
    const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
    const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

    const oAuth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI,
    );
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    // Get Access Token and set up the transporter
    oAuth2Client
      .getAccessToken()
      .then((accessToken) => {
        console.log('Access Token retrieved:', accessToken); // Log access token for debugging

        this.transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            type: 'OAuth2',
            user: process.env.GMAIL_USER,
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: accessToken || undefined,
          },
        } as nodemailer.TransportOptions); // Explicit cast to TransportOptions
      })
      .catch((err) => {
        console.error('Error retrieving access token', err); // Log token retrieval failure
      });
  }

  async sendMail(emailData: { name: string; email: string; message: string }) {
    const mailOptions = {
      to: process.env.GMAIL_USER, // Your email
      from: emailData.email, // Sender's email
      subject: `Message from ${emailData.name}`, // Email subject
      text: `You have received a new message from your website contact form.
  
      Name: ${emailData.name}
      Email: ${emailData.email}
      Message: ${emailData.message}`,
    };

    // Rest of the email sending logic remains unchanged

    try {
      console.log('Sending email with options:', mailOptions); // Log email details
      return await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending email:', error); // Log any errors during email sending
      throw error;
    }
  }
}
