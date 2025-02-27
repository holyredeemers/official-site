import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {

  feedbacks = [
    { name: "John Doe", year: "2010", occupation: "Software Engineer", comment: "This school shaped my career!" },
    { name: "Jane Smith", year: "2015", occupation: "Doctor", comment: "The discipline and education here were top-notch!" },
    { name: "Michael Lee", year: "2018", occupation: "Entrepreneur", comment: "A great place to learn and grow!" }
  ];

  currentIndex = 0;

  nextSlide() {
    if (this.currentIndex < this.feedbacks.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.feedbacks.length - 1;
    }
  }

  newFeedback = { name: '', year: '', occupation: '', comment: '' };

  submitFeedback() {
    if (this.newFeedback.name && this.newFeedback.year && this.newFeedback.occupation && this.newFeedback.comment) {
      this.feedbacks.push({ ...this.newFeedback });
      this.newFeedback = { name: '', year: '', occupation: '', comment: '' };
    }
  }
}
