import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import * as $ from 'jquery';
(window as any).$ = $;
(window as any).jQuery = $;
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.js';




bootstrapApplication(AppComponent, appConfig)

  .catch((err) => console.error(err));
