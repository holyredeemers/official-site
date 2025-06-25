import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { envi } from '../envi';

export interface Feedback {
  id?: number;
  name: string;
  year: string;
  occupation: string;
  comment: string;
  isApproved?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private apiUrl = `${envi.apiUrl}/feedback`;

  constructor(private http: HttpClient) {}

  submitFeedback(feedback: Feedback): Observable<any> {
    return this.http.post(this.apiUrl, feedback);
  }

  getApprovedFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.apiUrl}/approved`);
  }

  getPendingFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.apiUrl}/pending`);
  }

  approveFeedback(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/approve/${id}`, {});
  }

  deleteFeedback(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/feedbacks/${id}`);
  }
}
