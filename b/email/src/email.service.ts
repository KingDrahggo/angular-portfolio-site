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
    const REDIRECT_URI = 'https://developers.google.com/oauthplayground'; // Update this to your actual redirect URI

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
      },
    } as nodemailer.TransportOptions); // Explicit cast to TransportOptions
  }

  private async getAccessToken() {
    const oAuth2Client = new google.auth.OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      'https://your-app-url/auth/callback', // Update this
    );

    oAuth2Client.setCredentials({ refresh_token: process.env.GMAIL_REFRESH_TOKEN });

    try {
      const { token } = await oAuth2Client.getAccessToken();
      return token;
    } catch (error) {
      console.error('Error retrieving access token', error);
      throw error;
    }
  }

  async sendMail(emailData: { name: string; email: string; message: string }) {
    const accessToken = await this.getAccessToken();

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: emailData.email,
      subject: `Message from ${emailData.name}`,
      text: emailData.message,
    };

    try {
      return await this.transporter.sendMail({ ...mailOptions, auth: { accessToken } });
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
}
