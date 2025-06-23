import { Component, OnInit } from '@angular/core';
import { CarouselService, CarouselItem } from '../../service/carousel.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventsService, EventItem } from '../../service/events.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  carouselItems: CarouselItem[] = [];
  highlightEvents: EventItem[] = [];

  constructor(
    private carouselService: CarouselService,
    private eventsService: EventsService // inject it
  ) {}

  ngOnInit(): void {
    this.carouselService.getCarouselItems().subscribe((items) => {
      this.carouselItems = items;
    });

    this.eventsService.getTopEvents(4).subscribe((events) => {
      this.highlightEvents = events;
    });
  }
}
