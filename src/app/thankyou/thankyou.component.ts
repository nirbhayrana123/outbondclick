import { Component } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  imports: [],
  templateUrl: './thankyou.component.html',
  styleUrl: './thankyou.component.css'
})
export class ThankyouComponent {
ngOnInit(): void {
  // ✅ Google Conversion Event
  const googleScript = document.createElement('script');
  googleScript.innerHTML = `
    gtag('event', 'conversion', {'send_to': 'AW-11446766762/em48CN6xr_AZEKqZn9Iq'});
  `;
  document.head.appendChild(googleScript);

  // ✅ Facebook Lead Event
  const fbScript = document.createElement('script');
  fbScript.innerHTML = `fbq('track', 'Lead');`;
  document.head.appendChild(fbScript);
}
}
