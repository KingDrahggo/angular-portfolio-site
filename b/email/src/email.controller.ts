import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email') // This will map to /email route
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  // This will handle the POST request from the frontend
  @Post('send')
  async sendEmail(@Body() emailData: { name: string; email: string; message: string }) {
    console.log('Received email data:', emailData);  // Log received data
    
    try {
      const result = await this.emailService.sendMail(emailData);
      console.log('Email sent successfully:', result); // Log successful response

      return {
        success: true,
        message: 'Email sent successfully!',
        result: result,
      };
    } catch (error) {
      console.error('Error occurred while sending email:', error);  // Log error details

      return {
        success: false,
        message: 'Failed to send email',
        error: error.message,
      };
    }
  }
}
