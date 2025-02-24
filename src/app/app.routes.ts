import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AcademicsComponent } from './pages/academics/academics.component';
import { EventsComponent } from './pages/events/events.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'academics', component: AcademicsComponent },
    { path: 'feedback', component: FeedbackComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'events', component: EventsComponent },
    { path: '**', redirectTo: '' }
];
