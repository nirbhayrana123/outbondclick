import { Component } from '@angular/core';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { VideoSliderComponent } from '../video-slider/video-slider.component';
import { FormComponent } from '../form/form.component';
import { FaqComponent } from '../faq/faq.component';
import { CircleProgressOptions, NgCircleProgressModule } from 'ng-circle-progress';
@Component({
  selector: 'app-main-page',
  imports: [TestimonialComponent,VideoSliderComponent,FormComponent, FaqComponent,NgCircleProgressModule ],

  providers: [
    {
      provide: CircleProgressOptions,
      useValue: {
        radius: 70,
        outerStrokeWidth: 5,
        outerStrokeColor: '#ff3838',
        animation: true,
        animationDuration: 800,
       innerStrokeWidth: 0
      }
    }
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
