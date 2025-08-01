import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SafeUrlPipe } from '../safe-url.pipe';


@Component({
  selector: 'app-video-slider',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, SafeUrlPipe,],

  templateUrl: './video-slider.component.html',
  styleUrl: './video-slider.component.css'
})
export class VideoSliderComponent {

slideConfig = {
  dots: false,
  arrows: true,
  infinite: false, // loop off
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right"></i></button>',
  responsive: [
    {
      breakpoint: 1024, // tablet
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false // loop off for tablet
      }
    },
    {
      breakpoint: 768, // mobile
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false // loop off for mobile
      }
    }
  ]
};



  videos = [
    {
      
      src: 'https://www.youtube.com/embed/g_SvNVNb-nA?autoplay=1',
      poster: 'https://img.youtube.com/vi/g_SvNVNb-nA/maxresdefault.jpg'
    },
    {
      src: 'https://www.youtube.com/embed/w0DwvAEvEos',
      poster: 'https://img.youtube.com/vi/w0DwvAEvEos/maxresdefault.jpg'
    },
    {
      src: 'https://www.youtube.com/embed/oEoNFHmpCT4',
      poster: 'https://img.youtube.com/vi/oEoNFHmpCT4/maxresdefault.jpg'
    },
    {
      src: 'https://www.youtube.com/embed/3YE9jQX4lFA',
      poster: 'https://img.youtube.com/vi/3YE9jQX4lFA/maxresdefault.jpg'
    }
  ];


showModal = false;
  currentVideo = '';

  openVideo(videoUrl: string) {
    this.currentVideo = videoUrl;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.currentVideo = '';
  }

}

