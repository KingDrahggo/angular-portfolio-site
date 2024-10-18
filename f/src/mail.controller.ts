/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';


@Controller('email')
export class MailController {
  constructor(
   private readonly mailService: MailService) {}

   @Post()
   async sendEmail(@Body() emailData: { name: string, email: string, message: string }) {
     try {
       const result = await this.mailService.sendEmail(emailData);
       return { message: 'Email sent successfully', result };
     } catch (error) {
       return { message: 'Error sending email', error };
     }
   }


}
