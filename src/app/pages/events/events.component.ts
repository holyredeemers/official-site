import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { EventsService, EventItem } from '../../service/events.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  providers: [DatePipe],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  constructor(
    private datePipe: DatePipe,
    private eventsService: EventsService
  ) {}

  // Function to format date
  formatDate(date: Date | string): string {
    return this.datePipe.transform(date, 'd MMM yyyy') || '';
  }

  events: EventItem[] = [];

  ngOnInit() {
    this.eventsService.getEvents().subscribe({
      next: (res) => (this.events = res),
      error: (err) => console.error(err),
    });
  }

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
}
