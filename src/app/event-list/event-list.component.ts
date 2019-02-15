import { Component, OnInit } from '@angular/core';
import { EventService } from './../shared/event.service';
import { ToastrService } from './../shared/toastr.service';

@Component({
  template: `
  <div>
  <h1>Upcoming angular events</h1>
  <hr>
  <div class="row">
    <div class="col-md-5" *ngFor="let event of events">
      <event-thumbnail  [event]="event" (click)="handleThumbnailClick(event.name)"></event-thumbnail>
    </div>
  </div>
</div>
  `
})
export class EventListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService, private toastrSvc: ToastrService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: string) {
    this.toastrSvc.showSuccess(eventName);
  }

}
