import { Injectable, EventEmitter } from '@angular/core';
import { IEvent, ISession } from './event.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  domain: string = "http://localhost:63566";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.domain + '/api/events');
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(this.domain + '/api/events/' + id);
  }

  saveEvent(event: IEvent): Observable<number> {
    return this.http.post<number>(this.domain + '/api/events/', event);
  }

  searchSessions(searchTerm: string): Observable<ISession[]> {
    return this.http.get<ISession[]>(this.domain + '/api/events/sessions?searchTerm='+ searchTerm);
  }
}
