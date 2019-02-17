import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../shared/event.model';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {
  @Input() event: IEvent
  @Output() buttonClicked = new EventEmitter();

  getStartTimeClass() {
    if (this.event.time === '8:00 am')
      return ['green', 'bold'];
    return '';
  }
  /*handleClickMe() {
    console.log('clicked');
    this.buttonClicked.emit('button clicked!');
  }*/
}
