import { Injectable } from '@angular/core';
import { IEvent, ISession } from './event.model';
import { Observable, Subject, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router) { }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('/api/events')
      .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
  }

  private handleError<T>(operation = 'method name', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {

      if (error.url.indexOf("/api/auth/signin") > -1)
        this.router.navigate(['/login']);

      console.error(error);
      return of(result as T);
    }
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>('/api/events/' + id);
  }

  saveEvent(event: IEvent): Observable<number> {
    return this.http.post<number>('/api/events/', event);
  }

  searchSessions(searchTerm: string): Observable<ISession[]> {
    return this.http.get<ISession[]>('/api/events/sessions?searchTerm=' + searchTerm);
  }
}
