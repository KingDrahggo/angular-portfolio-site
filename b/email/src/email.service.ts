import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
    const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
    const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
    const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

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
        accessToken: oAuth2Client.getAccessToken(),
      },
    });
  }

  async sendMail(emailData: { name: string; email: string; message: string }) {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: emailData.email,
      subject: `Message from ${emailData.name}`,
      text: emailData.message,
    };

    return await this.transporter.sendMail(mailOptions);
  }
}
