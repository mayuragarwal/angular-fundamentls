import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `<h1>Hello from {{title}}</h1>
  <img src="/assets/images/basic-shield.png" />
  `
  
})
export class EventsAppComponent {
  title = 'angular-fundamentals';
}
