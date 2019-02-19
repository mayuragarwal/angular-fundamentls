import { Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SaveEventComponent } from './save-event/save-event.component';
import { Error404Component } from './errors/404.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateSessionComponent } from './create-session/create-session.component';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'events', component: EventListComponent },
    { path: 'events/new', component: SaveEventComponent },
    { path: 'events/edit/:id', component: SaveEventComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]