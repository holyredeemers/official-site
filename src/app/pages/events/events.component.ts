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
      title: 'Providing Cycle',
      date: new Date('2025-02-24'),
      description: 'Providing Cycles for the welfare of the Students.',
      images: [
        '/images/home/highlights/event1/cycle1.jpeg',
        '/images/home/highlights/event1/cycle2.jpeg',
      ]
    },
    {
      title: 'Pongal Celebration',
      date: new Date('2025-01-10'),
      description: 'Celebrating Pongal in school sows the seeds of tradition and gratitude in young hearts.',
      images: [
        '/images/home/highlights/event4/pongal0.jpeg',
        '/images/home/highlights/event4/pongal1.jpeg',
        '/images/home/highlights/event4/pongal2.jpeg',
        '/images/home/highlights/event4/pongal3.jpeg',
        '/images/home/highlights/event4/pongal4.jpeg',
      ]
    },
    {
      title: 'Sports Day',
      date: new Date('2025-04-05'),
      description: 'An exciting day of athletics and team competitions.',
      images: [
        '/images/home/highlights/event2/sports1.jpeg',
        '/images/home/highlights/event2/sports2.jpeg',
        '/images/home/highlights/event2/sports3.jpeg',
      ]
    },
    {
      title: 'Earth Day',
      date: new Date('2025-04-05'),
      description: 'By planting trees with our students, we are sowing the seeds of knowledge, care, and responsibility for a greener, better tomorrow.',
      images: [
        '/images/home/highlights/event3/tree1.jpeg',
        '/images/home/highlights/event3/tree2.jpeg',
        '/images/home/highlights/event3/tree3.jpeg',
        '/images/home/highlights/event3/tree4.jpeg',
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
