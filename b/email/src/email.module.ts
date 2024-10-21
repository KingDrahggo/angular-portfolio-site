import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';

@Module({
  imports: [],  // If you need to import other modules, you would list them here
  controllers: [EmailController],  // Your EmailController goes here
  providers: [EmailService],  // Your EmailService goes here
})
export class EmailModule {}
