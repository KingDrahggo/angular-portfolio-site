<<<<<<< HEAD
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, {
  providers:[
    provideRouter(routeConfig)
  ]
}).catch(err => console.error(err));
=======
/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { MailModule } from './mail.module';


async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // app.enableCors();
  // await app.listen(3000);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const app2 = await NestFactory.create(MailModule, {cors: true});
  app2.enableCors()
  await app2.listen(3000);
}
bootstrap();
>>>>>>> 07eac37 (adding back end)
