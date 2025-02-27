import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  providers: [DatePipe],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  constructor(private datePipe: DatePipe) {}

  // Function to format date
  formatDate(date: Date | string): string {
    return this.datePipe.transform(date, 'd MMM') || '';
  }

  events = [
    {
      title: 'Annual Science Fair',
      date: new Date('2025-02-24'),
      description: 'Students showcase innovative projects and scientific discoveries.',
      images: [
        '/images/events/science1.jpg',
        '/images/events/science2.jpg',
        '/images/events/science3.jpg'
      ]
    },
    {
      title: 'Inter-School Debate',
      date: new Date('2025-03-10'),
      description: 'A platform for students to enhance their public speaking skills.',
      images: [
        '/images/events/debate1.jpg',
        '/images/events/debate2.jpg'
      ]
    },
    {
      title: 'Sports Day',
      date: new Date('2025-04-05'),
      description: 'An exciting day of athletics and team competitions.',
      images: [
        '/images/events/sports1.jpg',
        '/images/events/sports2.jpg',
        '/images/events/sports3.jpg'
      ]
    }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000
  };
}
