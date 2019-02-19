import { Component, OnInit } from '@angular/core';
import { EventService } from './../shared/event.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'name';

  constructor(private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params['id']);
      this.addMode = false;
    });
    if (this.event == null)
      this.router.navigate(['404']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const maxId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = maxId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelNewSession() {
    this.addMode = false;
  }

}
