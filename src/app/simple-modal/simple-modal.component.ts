import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from '../shared/jQuery.service';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent {
  @Input() title: string;
  @Input() simpleModalId: string;
  @Input() closeOnBodyClick: string;

  @ViewChild('modalContainer') containerEl: ElementRef

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  closeModal() {
    if (this.closeOnBodyClick === 'true')
      this.$(this.containerEl.nativeElement).modal('hide');
  }
}
