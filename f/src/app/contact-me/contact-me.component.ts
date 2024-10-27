import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
  imports: [ReactiveFormsModule, HttpClientModule]
})
export class ContactMeComponent {
  contactForm: FormGroup;

  // Use the Render URL for your backend
  private apiUrl = 'https://angular-portfolio-site-b.onrender.com'; // Update this URL

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Send the form data to the backend API
      this.http.post<any>(`${this.apiUrl}/email/send`, this.contactForm.value)
        .subscribe(
          response => {
            console.log('Email sent successfully!', response); // Handle success
          },
          error => {
            console.error('Error sending email', error); // Handle error
          }
        );
        this.contactForm.reset(); // Reset the form
    }
  }
}
