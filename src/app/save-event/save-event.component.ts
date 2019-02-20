import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EventService } from '../shared/event.service';
import { IEvent } from '../shared/event.model';
import { DatePipe } from '@angular/common';

@Component({
  templateUrl: './save-event.component.html',
  styles: [`
      em { float:right; color:#E05C65; padding-left:10px; }
      .error input { background-color: #E3C3C5 }
  `]
})
export class SaveEventComponent implements OnInit {
  isDirty: boolean = true;
  newEvent: IEvent;

  constructor(private router: Router, private route: ActivatedRoute,
    private eventService: EventService, private datePipe: DatePipe) {
    this.newEvent = {} as any;
    this.newEvent.location = {} as any;
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params && params['id']) {
        this.eventService.getEvent(+params['id'])
          .subscribe(event => {
            if (event == null)
              this.router.navigate(['404']);
            this.newEvent = event;
            this.newEvent.date = this.datePipe.transform(this.newEvent.date, 'MM/dd/yyyy');
          });
      }
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues: IEvent) {
    formValues.id = this.newEvent.id;
    this.eventService.saveEvent(formValues).subscribe(eventId => {
      this.router.navigate(['/events']);
    });
  }

}
