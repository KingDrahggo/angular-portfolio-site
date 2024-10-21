import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email.module';

@Module({
  imports: [EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  //fffffff
}