import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedbackService, Feedback } from '../../service/feedback.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  feedbacks: Feedback[] = [];
  formData: Feedback = {
    name: '',
    year: '',
    occupation: '',
    comment: '',
  };
  submitted = false;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit() {
    // this.loadApprovedFeedback();

    this.feedbackService.getApprovedFeedback().subscribe((data) => {
      this.feedbacks = data;
    });
  }

  // loadApprovedFeedback() {
  //   this.feedbackService.getApprovedFeedback().subscribe((data) => {
  //     this.feedbacks = data;
  //   });
  // }

  submitFeedback() {
    this.feedbackService.submitFeedback(this.formData).subscribe(() => {
      this.submitted = true;
      this.formData = { name: '', year: '', occupation: '', comment: '' };
      setTimeout(() => (this.submitted = false), 3000);
    });
  }

  getInitials(name: string): string {
    if (!name) return '';
    const names = name.trim().split(' ');
    return names.length === 1
      ? names[0].charAt(0).toUpperCase()
      : (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  }
}
