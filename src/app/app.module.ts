import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './routes';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';

import { EventDetailsComponent } from './event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { SaveEventComponent } from './save-event/save-event.component';
import { Error404Component } from './errors/404.component';

import { EventService } from './shared/event.service';
import { TOASTR_TOKEN, Toastr } from './shared/toastr.service';
import { JQ_TOKEN } from './shared/jQuery.service';
import { AuthService } from './shared/auth.service';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { SessionListComponent } from './session-list/session-list.component';
import { CollapsibleWellComponent } from './collapsible-well/collapsible-well.component';
import { DurationPipe } from './shared/duration.pipe';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './shared/modal-trigger.directive';
import { UpvoteComponent } from './upvote/upvote.component';
import { LocationValidatorDirective } from './shared/location-validator.directive';
import { DatePipe } from '@angular/common';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    EventsAppComponent,
    NavbarComponent,
    EventListComponent,
    EventThumbnailComponent,
    Error404Component,
    EventDetailsComponent,
    SaveEventComponent,
    LoginComponent,
    ProfileComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpvoteComponent,
    
    DurationPipe,
    ModalTriggerDirective,
    LocationValidatorDirective
  ],
  providers: [
    EventService, 
    AuthService,
    DatePipe,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
