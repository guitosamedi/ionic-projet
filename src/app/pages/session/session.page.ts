import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../shared/services/session.service";
import {Session} from "../../shared/models/session";
import {environment} from "../../../environments/environment";
import { Router } from '@angular/router';


@Component({
  selector: 'app-session.ts',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})

export class SessionPage implements OnInit {

  sessions: Session[] = [];
  loading: boolean = true;
  pageTitle = 'Sessions';

  public _imgUrl = environment.api.images;

  constructor(
    private _sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    this._init();
  }

  private async _init() {
    (await this._sessionService
      .findAll())
      .subscribe((result) => (this.sessions = result));
  }

  navigateToSessionDetail(sessionId: number) {
    this.router.navigate(['/session', sessionId]);
  }

}
