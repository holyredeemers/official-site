import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image_path: string;
}

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  private apiUrl = 'http://localhost:3000/api/carousel';

  constructor(private http: HttpClient) {}

  getCarouselItems(): Observable<CarouselItem[]> {
    return this.http.get<CarouselItem[]>(this.apiUrl);
  }

  uploadCarouselItem(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  deleteCarouselItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
