import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';


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

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      business: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      monthly: ['', [Validators.required, Validators.min(1)]],
      platforms: this.fb.array(this.platforms.map(() => false))
    });
  }

  get platformControls(): FormArray<FormControl<boolean>> {
    return this.form.get('platforms') as FormArray<FormControl<boolean>>;
  }

  onSubmit() {
    const selectedPlatforms = this.platforms.filter((_, i) => this.platformControls.value[i]);
    const formValue = { ...this.form.value, platforms: selectedPlatforms };
    console.log('Form Submitted', formValue);
    // Handle submission logic here


    alert(`Form Data Submitted: \n Name: ${formValue.name} \n Business: ${formValue.business} \n Email: ${formValue.email} \n Monthly Budget: ${formValue.monthly} \n Selected Platforms: ${formValue.platforms.join(', ')}`);
  }
}
