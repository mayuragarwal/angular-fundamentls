import { Injectable } from '@angular/core';
import { ISession } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  userHasVoted(session: ISession, voterName: string): boolean {
    return session.voters.some(voter => voter === voterName);
  }
  addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName);
  }
  deleteVoter(session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }
}
