import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Session} from "../models/session";
import { catchError, map, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _baseUrl = environment.api.url;
  constructor(private _http: HttpClient) { }


  public findAll(): Observable<Session[]> {
    return this._http.get<Session[]>(`${this._baseUrl}/sessions`).pipe(
      map(response => Object.values(response)),
      catchError(this.handleError)
    );
  }

  public findById(id: number): Observable<Session | null> {
    return this._http.get<{ [key: number]: Session }>(`${this._baseUrl}/sessions`).pipe(
      map(response => {
        const array = Object.values(response);
        const session = array.find(session => session.id === id);
        return session || null;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Une erreur s\'est produite :', error);
    return throwError(() => new Error('Une erreur s\'est produite.'));
  }

}
