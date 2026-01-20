import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, MatSnackBarModule]
})
export class ContactMeComponent {
  contactForm: FormGroup;
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  // Use the Render URL for your backend
  private apiUrl = 'https://angular-portfolio-site-b.onrender.com'; // Update this URL

  constructor(private http: HttpClient, private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.successMessage = '';
      this.errorMessage = '';

      // Send the form data to the backend API
      this.http.post<any>(`${this.apiUrl}/email/send`, this.contactForm.value)
        .subscribe({
          next: (response) => {
            console.log('Email sent successfully!', response);
            this.successMessage = 'Message sent successfully! I\'ll get back to you soon.';
            this.contactForm.reset();
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error sending email', error);
            this.errorMessage = 'Failed to send message. Please try again or contact me directly via email.';
            this.isLoading = false;
          }
        });
    }
  }
  emailText = 'Email';

  copyEmail() {
    const email = 'webdevgregr@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      this.emailText = 'Copied!';
      this.snackBar.open('Email copied to clipboard!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: ['green-snackbar'] // Optional: add custom class if needed
      });
      setTimeout(() => {
        this.emailText = 'Email';
      }, 2000); // Reset text after 2 seconds
    }).catch(err => {
      console.error('Failed to copy email: ', err);
    });
  }
}
