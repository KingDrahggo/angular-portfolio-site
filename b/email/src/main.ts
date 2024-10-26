import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable compression
  app.use(compression());

  // Enable CORS
  app.enableCors({
    origin: 'http://18.219.159.17:3000',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    credentials: true
  });

  await app.listen(3000,"0.0.0.0");
}
bootstrap();

