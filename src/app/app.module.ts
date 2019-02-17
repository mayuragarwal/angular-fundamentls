import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { appRoutes } from './routes';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';

import { EventDetailsComponent } from './event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './errors/404.component';

import { EventService } from './shared/event.service';
import { ToastrService } from './shared/toastr.service';
import { AuthService } from './shared/auth.service';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { SessionListComponent } from './session-list/session-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    NavbarComponent,
    EventListComponent,
    EventThumbnailComponent,
    Error404Component,
    EventDetailsComponent,
    CreateEventComponent,
    LoginComponent,
    ProfileComponent,
    CreateSessionComponent,
    SessionListComponent
  ],
  providers: [EventService, ToastrService, AuthService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
