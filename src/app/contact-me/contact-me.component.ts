import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormGroup, FormBuilder , Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
  imports: [ReactiveFormsModule]
})
export class ContactMeComponent {
  contactForm: FormGroup;


  constructor( private http: HttpClient, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }


  onSubmit() {
    if (this.contactForm.valid) {
      this.http.post<any>('http://localhost:3000/email', this.contactForm.value)
        .subscribe(
          response => {
            console.log('Email sent successfully!', response)// Handle success
          },
          error => {
            console.error('Error sending email', error)
          }
        );
    }
    console.log(this.contactForm.value.email);
  }

}

