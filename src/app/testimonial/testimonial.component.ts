import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import $ from 'jquery';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {

  slideConfig = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
    //  autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  testimonials = [
    {
      text: "Great service and quality! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
      name: "Jone",
      role: "Designer",
      img: "img/user.jpg"
    },
    {
      text: "Loved working with the team. Nulla volutpat aliquam velit. Phasellus iaculis neque purus, euismod venenatis enim ultricies.",
      name: "Emily",
      role: "Developer",
      img: "img/user.jpg"
    },
    {
      text: "Loved working with the team. Nulla volutpat aliquam velit. Phasellus iaculis neque purus, euismod venenatis enim ultricies.",
      name: "Emily",
      role: "Developer",
      img: "img/user.jpg"
    },
    {
      text: "Loved working with the team. Nulla volutpat aliquam velit. Phasellus iaculis neque purus, euismod venenatis enim ultricies.",
      name: "Emily",
      role: "Developer",
      img: "img/user.jpg"
    },
    {
      text: "Loved working with the team. Nulla volutpat aliquam velit. Phasellus iaculis neque purus, euismod venenatis enim ultricies.",
      name: "Emily",
      role: "Developer",
      img: "img/user.jpg"
    }
  ];

  //  ngAfterViewInit(): void {
  //     setTimeout(() => {
  //       $('.testimonial-slider').slick(this.slideConfig);
  //     }, 0);
  //   }
}

