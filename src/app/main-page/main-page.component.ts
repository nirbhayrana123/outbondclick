import { Component } from '@angular/core';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { VideoSliderComponent } from '../video-slider/video-slider.component';
import { FormComponent } from '../form/form.component';
import { FaqComponent } from '../faq/faq.component';
import { CircleProgressOptions, NgCircleProgressModule } from 'ng-circle-progress';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ShortVideoComponent } from '../short-video/short-video.component';
import { RouterModule, RouterLink } from '@angular/router';

// import { RouterLink } from "../../../node_modules/@angular/router/router_module.d-BivBj8FC";
@Component({
  selector: 'app-main-page',
  imports: [TestimonialComponent, VideoSliderComponent, FormComponent, FaqComponent, NgCircleProgressModule, ShortVideoComponent],

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
  
// isModalOpen = false;
//   videoUrl!: SafeResourceUrl;

//   constructor(private sanitizer: DomSanitizer) {}

//   openModal() {
//     const url = 'https://www.youtube.com/embed/EKHjK_iBROA?autoplay=1';
//     this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
//     this.isModalOpen = true;
//   }

//   closeModal() {
//     this.isModalOpen = false;
//   }

   

animateValues() {
  this.animate('fromValue', 25, 50, 1);
  // You can animate `toValue` or ROAS if needed.
}

animate(property: string, start: number, end: number, duration: number) {
  const frameRate = 60;
  const totalFrames = duration * 1000 / (1000 / frameRate);
  let frame = 0;

  const interval = setInterval(() => {
    frame++;
    const progress = frame / totalFrames;
    (this as any)[property] = Math.floor(start + (end - start) * progress);
    if (frame >= totalFrames) {
      (this as any)[property] = end;
      clearInterval(interval);
    }
  }, 1000 / frameRate);
}


dollarCounter = 0; // For $50 animation
  leadCounter = 0;   // For 300+ leads animation
  ngOnInit() {
    this.animateDollarCounter(50, 1000); // Animate to $50 in 1 second
    this.animateLeadCounter(300, 1000);  // Animate to 300 leads in 1 second
  }
  animateDollarCounter(target: number, duration: number) {
    const steps = 50;
    const increment = target / steps;
    const timePerStep = duration / steps;
    interval(timePerStep).pipe(
      takeWhile(() => this.dollarCounter < target)
    ).subscribe(() => {
      this.dollarCounter = Math.min(this.dollarCounter + increment, target);
      this.dollarCounter = parseFloat(this.dollarCounter.toFixed(2));
    });
  }
  animateLeadCounter(target: number, duration: number) {
    const steps = 50;
    const increment = target / steps;
    const timePerStep = duration / steps;
    interval(timePerStep).pipe(
      takeWhile(() => this.leadCounter < target)
    ).subscribe(() => {
      this.leadCounter = Math.ceil(this.leadCounter + increment);
    });
  }



}
