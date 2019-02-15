import { Component, OnInit } from '@angular/core';
import { EventService } from './../shared/event.service';
import { ToastrService } from './../shared/toastr.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html'
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
