import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envi } from '../envi';

export interface EventItem {
  id?: number;
  title: string;
  description: string;
  date: string;
  images: string[];
}

@Injectable({ providedIn: 'root' })
export class EventsService {
  private apiUrl = `${envi.apiUrl}/events`;

  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventItem[]> {
    return this.http.get<EventItem[]>(this.apiUrl);
  }

  addEvent(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, formData);
  }

  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

getTopEvents(limit = 4): Observable<EventItem[]> {
  return this.http.get<EventItem[]>(`${this.apiUrl}/recent`);
}

}
