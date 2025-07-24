import { Component } from '@angular/core';
// import { SafeUrlPipe } from '../safe-url.pipe';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-short-video',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule,],

  templateUrl: './short-video.component.html',
  styleUrl: './short-video.component.css'
})
export class ShortVideoComponent {

  isModalOpen = false;
  videoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  openModal() {
    const url = 'https://www.youtube.com/embed/EKHjK_iBROA?autoplay=1';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
