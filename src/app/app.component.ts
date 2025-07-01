import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { ThankyouComponent } from './thankyou/thankyou.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ThankyouComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: false
    });
  }

  ngAfterViewInit(): void {
    AOS.refresh(); // Optional, if content loads later
  }

  // ngOnInit(): void {

  //   this.aosInit();
  // }

  // ngAfterViewInit(): void {

  //   this.aosInit();
  // }
  title = 'my-angular-app';

}
