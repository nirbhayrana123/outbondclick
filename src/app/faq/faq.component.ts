import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'

})
export class FaqComponent {
  faqs = [
    {
      question: 'How soon will I see results?',
      answer: 'Results from outbound efforts can vary based on your industry, target audience, and the channels used. However, you can typically start seeing initial engagement within the first 1–2 weeks. For more meaningful outcomes like qualified leads or conversions, it usually takes 4–6 weeks of consistent outreach and optimization',
      isActive: false
    },
    {
      question: 'Is there a contract?',
      answer: 'Yes, we operate with a service agreement to ensure transparency and alignment. Our contracts are flexible, outlining the scope of work, timelines, and deliverables—without locking you into long-term commitments unless mutually agreed upon.',
      isActive: false
    },
    {
      question: 'Do you provide ad creatives?',
      answer: 'Yes, we offer professionally designed ad creatives as part of our outbound services. Whether its graphics, copywriting, or full campaign assets, we ensure everything aligns with your brand and messaging goals.',
      isActive: false
    },
    {
      question: 'Will I have reporting access?',
      answer: 'Absolutely. You ll receive regular reports and have access to real-time performance data, so you can track progress, engagement, and ROI at any stage of the campaign.',
      isActive: false
    },

    {
      question: 'Can you work with my current website team?',
      answer: 'Yes, we’re happy to collaborate with your existing website team. Our goal is to ensure seamless integration and alignment, whether its coordinating on landing pages, tracking, or messaging consistency.',
      isActive: false
    }



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








