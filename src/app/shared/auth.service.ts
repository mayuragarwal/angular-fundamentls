import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;
  domain: string = "http://localhost:63566";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  loginUser(userName: string, password: string) {
    this.http.post<IUser>("/api/auth/signin", { userName: userName, password: password }, this.httpOptions)
      .pipe(catchError(this.handleError<IUser>('getEvents', null)))
      .subscribe(user => this.currentUser = user);
  }

  private handleError<T>(operation = 'method name', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}


