import { Component, OnInit } from '@angular/core';
import { EventService } from './../shared/event.service';
import { IEvent } from '../shared/event.model';

@Component({
  template: `
  <div>
  <h1>Upcoming angular events</h1>
  <hr>
  <div class="row">
    <div class="col-md-5" *ngFor="let event of events">
      <event-thumbnail  [event]="event"></event-thumbnail>
    </div>
  </div>
</div>
  `
})
export class EventListComponent implements OnInit {
  events: IEvent[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
  }

}
