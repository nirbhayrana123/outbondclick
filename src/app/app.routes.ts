import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
 

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'thank-you', component: ThankyouComponent },
];
