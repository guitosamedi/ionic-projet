import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../shared/services/session.service";
import {Session} from "../../shared/models/session";
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import {DetailPage} from "./detail/detail.page";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-session.ts',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})

export class SessionPage implements OnInit {

  sessions: Session[] = [];
  loading: boolean = true;
  sessionDetail = DetailPage;
  private _baseUrl = environment.urlApi.sessions;

  constructor(
    private _sessionService: SessionService
  ) { }

  ngOnInit() {
    this._init();
  }

  private async _init() {
    (await this._sessionService
      .findAll())
      .subscribe((result) => (this.sessions = result));
    await console.log(this.sessions);
  }

  // private _init() {
  //   // Liste des sessions
  //   this._sessionService.findAllSession().subscribe(
  //     (sessionReceived) => {
  //       this.sessions = sessionReceived;
  //       console.log(sessionReceived);
  //       this.loading = false;
  //     },
  //     (error) => {
  //       console.error("Erreur lors de la récupération des sessions :", error);
  //       this.loading = false;
  //     }
  //   );
  // }
}
