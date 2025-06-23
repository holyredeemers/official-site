import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CarouselService,
  CarouselItem,
} from '../../../service/carousel.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './scroll.component.html',
})
export class ScrollComponent {
  title = '';
  description = '';
  imageFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(private carouselService: CarouselService) {}

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.imageFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => (this.previewUrl = reader.result);
      reader.readAsDataURL(this.imageFile);
    }
  }

  submitForm(): void {
    if (!this.imageFile) return;

    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('description', this.description);
    formData.append('image', this.imageFile);

    this.carouselService.uploadCarouselItem(formData).subscribe({
      next: () => {
        alert('Carousel item uploaded successfully!');
        this.title = '';
        this.description = '';
        this.imageFile = null;
        this.previewUrl = null;
      },
      error: (err) => {
        alert('Upload failed');
        console.error(err);
      },
    });
  }

  carouselItems: CarouselItem[] = [];

  ngOnInit() {
    this.loadCarouselItems();
  }

  loadCarouselItems() {
    this.carouselService.getCarouselItems().subscribe({
      next: (items) => (this.carouselItems = items),
      error: (err) => console.error('Failed to load carousel items', err),
    });
  }

  deleteItem(id: number) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.carouselService.deleteCarouselItem(id).subscribe({
        next: () => {
          alert('Deleted successfully');
          this.loadCarouselItems(); // Refresh list
        },
        error: (err) => {
          alert('Failed to delete item');
          console.error(err);
        },
      });
    }
  }
}
