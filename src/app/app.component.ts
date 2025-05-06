import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, FooterComponent,RouterModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  aosInit() {
    AOS.init({
      duration: 800,  
      easing: 'ease-in-out',
      once: true,  
      mirror: false 
    });
  }

  ngOnInit(): void {
   
    this.aosInit();
  }

  ngAfterViewInit(): void {

    this.aosInit();
  }
  title = 'my-angular-app';

}
