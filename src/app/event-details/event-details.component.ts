import { Component, OnInit } from '@angular/core';
import { EventService } from './../shared/event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent
  constructor(private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    if (this.event == null)
      this.router.navigate(['404']);
  }

}