import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventsService, EventItem } from '../../../service/events.service';

@Component({
  selector: 'app-event-back',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-back.component.html',
})
export class EventBackComponent {
  title = '';
  description = '';
  date = '';
  images: File[] = [];

  events: EventItem[] = [];

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventsService.getEvents().subscribe({
      next: (res) => (this.events = res),
      error: (err) => console.error('Error fetching events:', err),
    });
  }

  onFileChange(event: any) {
    const files = event.target.files;
    if (files) {
      this.images = Array.from(files).filter((file) => file instanceof File);
    }
  }

  submitEvent() {
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('description', this.description);
    formData.append('date', this.date);
    this.images.forEach((img) => formData.append('images', img));

    this.eventsService.addEvent(formData).subscribe({
      next: () => {
        alert('Event added successfully');
        this.loadEvents(); // refresh
      },
      error: (err) => console.error('Error:', err),
    });
  }

  deleteEvent(id: number) {
    if (confirm('Are you sure you want to delete this event?')) {
      this.eventsService.deleteEvent(id).subscribe({
        next: () => {
          this.events = this.events.filter((e) => e.id !== id);
          alert('Event deleted');
        },
        error: (err) => {
          console.error('Delete error:', err);
          alert('Failed to delete event');
        },
      });
    }
  }
}
