import { Component, OnInit } from '@angular/core';
import { FeedbackService, Feedback } from '../../../service/feedback.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-feedback.component.html',
  styleUrls: ['./admin-feedback.component.css'],
})
export class AdminFeedbackComponent implements OnInit {
  feedbacks: Feedback[] = [];
  approvedFeedbacks: Feedback[] = [];

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit() {
    this.loadPendingFeedback();
    this.loadApprovedFeedbacks();
  }

  loadPendingFeedback() {
    this.feedbackService.getPendingFeedback().subscribe((data) => {
      this.feedbacks = data;
    });
  }

  loadApprovedFeedbacks(): void {
    this.feedbackService.getApprovedFeedback().subscribe({
      next: (data) => (this.approvedFeedbacks = data),
      error: (err) => console.error('Error loading approved feedbacks:', err),
    });
  }

  approveFeedback(id: number) {
    this.feedbackService.approveFeedback(id).subscribe(() => {
      this.feedbacks = this.feedbacks.filter((fb) => fb.id !== id);
    });
  }

  deleteFeedback(id: number): void {
    if (confirm('Are you sure you want to delete this feedback?')) {
      this.feedbackService.deleteFeedback(id).subscribe({
        next: () => {
          this.feedbacks = this.feedbacks.filter((fb) => fb.id !== id);
        },
        error: (err) => {
          console.error('Delete failed:', err);
        },
      });
    }
  }

  deleteFeedback2(id: number | undefined): void {
    if (!id) return;

    if (confirm('Are you sure you want to delete this feedback?')) {
      this.feedbackService.deleteFeedback(id).subscribe({
        next: () => {
          this.approvedFeedbacks = this.approvedFeedbacks.filter(
            (f) => f.id !== id
          );
        },
        error: (err) => console.error('Error deleting feedback:', err),
      });
    }
  }
}
