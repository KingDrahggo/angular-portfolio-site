import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  // Enable compression
  app.use(compression());

  // Enable CORS
  app.enableCors({
    origin: 'https://your-angular-frontend-url.com',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
  });

  await app.listen(port);
}
bootstrap();

