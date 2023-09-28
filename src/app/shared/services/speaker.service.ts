import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Speaker} from "../models/speaker";

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  private _baseUrl = environment.urlApi.speakers;
  constructor(private _http: HttpClient) { }
  findAll(): Observable<Speaker[]>{
    return this._http.get<Speaker[]>(this._baseUrl).pipe(
      map(response =>Object.values(response))
    );
  }
}
