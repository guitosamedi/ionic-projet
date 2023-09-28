import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {Session} from "../models/session";
import {catchError, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _baseUrl = environment.urlApi.sessions;
  constructor(private _http: HttpClient) { }

  findAll(): Observable<Session[]>{
    return this._http.get<Session[]>(this._baseUrl).pipe(
      map(response =>Object.values(response))
    );
  }
}
