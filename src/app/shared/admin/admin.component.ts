import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollComponent } from './scroll/scroll.component';
import { EventBackComponent } from './event-back/event-back.component';
import { AdminFeedbackComponent } from './admin-feedback/admin-feedback.component';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    ScrollComponent,
    EventBackComponent,
    AdminFeedbackComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnDestroy {
  activeTab = 'scroll';

  setTab(tab: string) {
    this.activeTab = tab;
  }

  private navigationSub: Subscription;

  constructor(private router: Router) {
    // Listen to route changes
    this.navigationSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (!event.url.includes('/admin')) {
          // User is navigating away from admin route
          localStorage.removeItem('isAdminAuthenticated');
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('isAdminAuthenticated');
    this.router.navigate(['/admin-login']);
  }

  ngOnDestroy(): void {
    if (this.navigationSub) {
      this.navigationSub.unsubscribe();
    }
  }
}
