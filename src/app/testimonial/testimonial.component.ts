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
      text: "Govind was exceptional to work with. He is committed, dedicated, a fast learner, result driven, and he truly cares about providing the best results. He puts the client first, he has a great work ethic, he communicated efficiently throughout this project and he totally delivered. I very much enjoyed working with Govind and would not hesitate recommending him to anyone who is looking for high quality work.",
      name: "Paul Money",
      role: "Client",
      img: "img/testimonials1.png"
    },
    {
      text: "Absolutely amazing job! After 2 years of searching, we finally found someone who truly delivered well above our expectations! So easy work with, able to make calculated adjustment without direction and a remarkable attitude, Govind is our all-time favorite Upworks contractor. Understands paid ad campaigns on a very high level! I am not the easiest business owner to please, but was 150% satisfied with the experience with Govind! Highly recommen",
      name: "Richard Force",
      role: "Client",
      img: "img/testimonials2.webp"
    },
    {
      text: "Great to work with him. I already have him on the front my list for my next job in a couple of weeks.",
      name: "Paolo",
      role: "Client",
      img: "img/testimonials3.png"
    },
    {
      text: "It was really pleasure working with Mr. Sharma. He seems very knowledgeable and really took care of my project. Customer's satisfaction is his first priority. I will recommend him to everyone else. And I look forward to work again with him very soon.",
      name: "Moritz Gruber",
      role: "Client",
      img: "img/testimonials5.webp"
    }
    
  ];

  //  ngAfterViewInit(): void {
  //     setTimeout(() => {
  //       $('.testimonial-slider').slick(this.slideConfig);
  //     }, 0);
  //   }
}

