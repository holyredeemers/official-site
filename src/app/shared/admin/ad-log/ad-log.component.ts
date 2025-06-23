import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-log',
  imports: [CommonModule, FormsModule],
  templateUrl: './ad-log.component.html',
  styleUrl: './ad-log.component.css',
})
export class AdLogComponent {
  username = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'holyredeemers' && this.password === 'Holy@#0987') {
      localStorage.setItem('isAdminAuthenticated', 'true');
      this.router.navigate(['/admin']);
    } else {
      this.error = 'Invalid credentials';
    }
  }
}
