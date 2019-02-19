import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
  iconColor: string;

  @Output() vote = new EventEmitter();
  @Input() count: number;
  @Input() set voted(val: boolean) {
    this.iconColor = val ? 'red' : 'white';
  }

  onClick() {
    this.vote.emit({});
  }
}
