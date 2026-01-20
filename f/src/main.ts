// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, {
  providers:[
    provideRouter(routeConfig),
    provideAnimations(),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
