import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/event.model';
import { AuthService } from '../shared/auth.service';
import { VoterService } from '../shared/voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  visibleSessions: ISession[];

  constructor(private authService: AuthService, private voterService: VoterService) { }

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy == 'name' ? this.visibleSessions.sort(this.sortByNameAsc) : this.visibleSessions.sort(this.sortByVotesDesc)
    }
  }

  userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.authService.currentUser.userName);
    } else {
      this.voterService.addVoter(session, this.authService.currentUser.userName);
    }

    if (this.sortBy == 'votes') {
      this.visibleSessions.sort(this.sortByVotesDesc);
    }
  }

  filterSessions(filterBy: string) {
    if (filterBy === "all") {
      this.visibleSessions = this.sessions.slice(0);
    }
    else {
      this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filterBy);
    }
  }

  sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) return 1;
    else if (s1.name === s2.name) return 0;
    else return -1;
  }

  sortByVotesDesc(s1: ISession, s2: ISession) {
    if (s1.voters.length < s2.voters.length) return 1;
    else if (s1.voters.length === s2.voters.length) return 0;
    else return -1;
  }

}
