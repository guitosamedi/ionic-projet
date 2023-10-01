import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {Speaker} from "../models/speaker";


@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  private _baseUrl = environment.api.url;
  constructor(private _http: HttpClient) { }

  public findAll(): Observable<Speaker[]> {
    return this._http.get<Speaker[]>(`${this._baseUrl}/speakers`).pipe(
      map(response => Object.values(response)),
      catchError(this.handleError)
    );
  }
// Numeric ID
  // public findById(id: string): Observable<Speaker | null> {
  //   return this._http.get<{ [key: string]: Speaker }>(`${this._baseUrl}/speakers`).pipe(
  //     map(response => {
  //       const array = Object.values(response);
  //       const speaker = array.find(speaker => speaker.id === id);
  //       return speaker || null;
  //     }),
  //     catchError(this.handleError)
  //   );
  // }
  public findById(id: string): Observable<Speaker | null> {
    return this._http.get<{ [key: string]: Speaker }>(`${this._baseUrl}/speakers`).pipe(
      map(speaker => speaker[id] || null),
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    console.error('Une erreur s\'est produite :', error);
    return throwError(() => new Error('Une erreur s\'est produite.'));
  }

}
