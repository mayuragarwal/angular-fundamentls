import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { ISession } from '../shared/event.model';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  searchTerm: string;
  foundSessions: ISession[];

  constructor(private auth: AuthService, private eventService: EventService) { }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm)
      .subscribe(sessions => {
        this.foundSessions = sessions;
      });
  }

}
