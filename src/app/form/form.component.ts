import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form: FormGroup;
  platforms = ['Meta', 'Google', 'Bing'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      business: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      monthly: ['', [Validators.required, Validators.min(1)]],
      phone: ['', [Validators.pattern('^[0-9]{10}$')]],
      platforms: this.fb.array(this.platforms.map(() => false))
    });
  }
 
  get platformControls(): FormArray<FormControl<boolean>> {
    return this.form.get('platforms') as FormArray<FormControl<boolean>>;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const selectedPlatforms = this.platforms.filter((_, i) => this.platformControls.value[i]);

    const templateParams = {
      business: this.form.value.business,
      email: this.form.value.email,
      monthly: this.form.value.monthly,
      phone: this.form.value.phone || 'Not provided',
      platforms: selectedPlatforms.join(', ')
    };

    emailjs.send('service_tu230nm', 'template_73raqyg', templateParams, 'qBA8U4uKaTMLWVwUx')
      .then((result: EmailJSResponseStatus) => {
        console.log('Email sent successfully:', result.text);
        this.form.reset();
        this.router.navigate(['/thank-you']);  // ✅ Redirect to thank you page
      }, (error) => {
        console.error('Email failed to send:', error);
        alert('There was an error sending your form. Please try again later.');
      });
  }
}
