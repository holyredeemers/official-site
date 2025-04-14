import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedbacks = [
    { name: 'John Doe', year: '2022', occupation: 'Engineer', comment: 'Holy Redeemer shaped my future beautifully.' },
    { name: 'Alice Smith', year: '2021', occupation: 'Doctor', comment: 'Forever grateful for the memories and learning.' },
    { name: 'Michael Lee', year: '2023', occupation: 'Entrepreneur', comment: 'Amazing staff and opportunities!' },
  ];

  staffs = [
    { name: 'Mrs. Teresa', role: 'Principal', img: 'assets/staff1.jpg' },
    { name: 'Mr. Daniel', role: 'Math Teacher', img: 'assets/staff2.jpg' },
    { name: 'Ms. Clara', role: 'English Teacher', img: 'assets/staff3.jpg' },
  ];

  formData = {
    name: '',
    year: '',
    occupation: '',
    comment: ''
  };

  submitted = false;

  submitFeedback() {
    this.feedbacks.push({ ...this.formData });
    this.submitted = true;
    this.formData = { name: '', year: '', occupation: '', comment: '' };
    setTimeout(() => this.submitted = false, 3000);
  }
}
