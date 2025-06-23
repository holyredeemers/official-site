import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AcademicsComponent } from './pages/academics/academics.component';
import { EventsComponent } from './pages/events/events.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './shared/admin/admin.component';
import { AdLogComponent } from './shared/admin/ad-log/ad-log.component';
import { adminGuard } from './service/admin.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'academics', component: AcademicsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'events', component: EventsComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'admin-login',
    component: AdLogComponent,
  },
  // { path: 'admins', component: AdminComponent },
  { path: '**', redirectTo: '' },
];
