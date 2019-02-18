import { Component } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  template: `
  <div (click)="toggleContent()" class="well pointable hoverwell thumbnail-collapsible">
    <ng-content select="[well-title]"></ng-content>
    <ng-content select="[well-body]" *ngIf="visible"></ng-content>
  </div>
  `,
})
export class CollapsibleWellComponent {
  visible: boolean = true;

  toggleContent() {
    this.visible = !this.visible;
  }

}
