import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from '../shared/event.model';
import { EventService } from '../shared/event.service';

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
      em { float:right; color:#E05C65; padding-left:10px; }
      .error input { background-color: #E3C3C5 }
  `]
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;
  newEvent: any;

  constructor(private router: Router, private eventService: EventService) {
  }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.router.navigate(['/events']);
  }

}
