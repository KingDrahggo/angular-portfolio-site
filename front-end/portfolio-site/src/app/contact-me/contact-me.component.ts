import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
  imports: [ReactiveFormsModule, HttpClientModule]  // Ensure both modules are imported
})
export class ContactMeComponent {
  contactForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    // Initialize the form with validators
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Replace with the correct backend URL when deployed
      this.http.post<any>('http://18.219.159.17:3000/email', this.contactForm.value)
        .subscribe(
          response => {
            console.log('Email sent successfully!', response); // Handle success
          },
          error => {
            console.error('Error sending email', error); // Handle error
          }
        );
    } else {
      console.error('Form is invalid');
    }
}
}

