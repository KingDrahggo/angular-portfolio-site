   import { Module } from '@nestjs/common';
   import { MailerModule } from '@nestjs-modules/mailer';
   import { MailService } from './mail.service';

   @Module({
     imports: [
       MailerModule.forRoot({
         transport: {
           host: 'smtp.gmail.com', // Your SMTP host
           port: 587,
           secure: false, // true for 465, false for other ports
           auth: {
             user: 'webdevgregr@gmail.com', // Your email
             pass: 'kingd2528', // Your password
           },
         },
         defaults: {
           from: '"Gregory R" <webdevgregr@gmail.com>',
         },
       }),
     ],
     providers: [MailService],
     exports: [MailService],
   })
   export class MailModule {}