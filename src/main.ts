import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/application/app.config';
import { AppComponent } from './app/application/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
