import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-faq',
  standalone: true,  
  imports: [CommonModule  ], 
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs = [
    { question: 'How soon will I see results?', 
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante orci, venenatis vel mauris eu, finibus cursus metus. Nunc consectetur, purus at eleifend blandit, nulla turpis posuere tellus, vel venenatis neque velit hendrerit leo.',
      isActive: false},
    { question: 'Is there a contract?', 
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante orci, venenatis vel mauris eu, finibus cursus metus. Nunc consectetur, purus at eleifend blandit, nulla turpis posuere tellus, vel venenatis neque velit hendrerit leo.',
      isActive: false },
    { question: 'Do you provide ad creatives?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante orci, venenatis vel mauris eu, finibus cursus metus. Nunc consectetur, purus at eleifend blandit, nulla turpis posuere tellus, vel venenatis neque velit hendrerit leo.',
      isActive: false },
    { question: 'Will I have reporting access?', 
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante orci, venenatis vel mauris eu, finibus cursus metus. Nunc consectetur, purus at eleifend blandit, nulla turpis posuere tellus, vel venenatis neque velit hendrerit leo.',
      isActive: false }
  ];

 
  toggleFAQ(index: number) {
    // Close all open FAQ items
    this.faqs.forEach((faq, i) => {
      if (i !== index) {
        faq.isActive = false;
      }
    });

    // Toggle the clicked FAQ item
    this.faqs[index].isActive = !this.faqs[index].isActive;
  }


}
