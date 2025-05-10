import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import $ from 'jquery';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@Component({
  selector: 'app-video-slider',
  standalone: true,
  imports: [CommonModule,SlickCarouselModule],

  templateUrl: './video-slider.component.html',
  styleUrl: './video-slider.component.css'
})
export class VideoSliderComponent  {

  slideConfig = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right"></i></button>'
  };

  videos = [
    {
      src: 'https://development.revelatedesigns.com/wp-content/uploads/2024/10/Ripio-Hydration.mp4',
      poster: 'https://development.revelatedesigns.com/wp-content/uploads/2024/10/Ripio-Hydration_thumb1.jpg'
    },
    {
      src: 'https://development.revelatedesigns.com/wp-content/uploads/2024/10/Ripio-Zipper.mp4',
      poster: 'https://development.revelatedesigns.com/wp-content/uploads/2024/10/Ripio-Zipper_thumb1.jpg'
    }
  ];

 
}
