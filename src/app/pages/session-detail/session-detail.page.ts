import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../shared/services/session.service';
import { Session } from '../../shared/models/session';
import { SpeakerService } from '../../shared/services/speaker.service';
import {environment} from "../../../environments/environment";
import {Speaker} from "../../shared/models/speaker";

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.page.html',
  styleUrls: ['./session-detail.page.scss'],
})
export class SessionDetailPage implements OnInit {
  session: Session | null = null;
  speakers: Speaker[] = [];
  pageTitle = 'Session';
  public _imgUrl = environment.api.images;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _sessionService: SessionService,
    private _speakerService: SpeakerService
  ) {}

  ngOnInit() {
    this._init();
  }

 private _init() {
    this._activatedRoute.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      if (idParam !== null) {
        const sessionId = +idParam;
        if (!isNaN(sessionId)) {
          this._sessionService.findAll().subscribe((sessions) => {
            this.session = sessions.find((session) => session.id === sessionId) || null;
            if (this.session) {
              if (this.session.speakers) {
                this.session.speakers.forEach((speakerId) => {
                  this._speakerService.findById(speakerId).subscribe((speaker) => {
                    if (speaker) {
                      this.speakers.push(speaker);
                    }
                  });
                });
              }
            }
          });
        }
      }
    });
  }
}
