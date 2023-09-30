import {Component, OnInit} from '@angular/core';
import {Speaker} from "../../shared/models/speaker";
import {SpeakerService} from "../../shared/services/speaker.service";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.page.html',
  styleUrls: ['./speaker.page.scss'],
})

export class SpeakerPage implements OnInit {

  speakers: Speaker[] = [];
  pageTitle = 'Présentateurs';
  public _imgUrl = environment.api.images;

  constructor(private _speakerService: SpeakerService,
              private router: Router) {
  }

  ngOnInit() {
    this._init();
  }

  goToSpeakerDetail(speakerId: number) {
    this.router.navigate(['/speaker', speakerId]);
  }

  private _init() {
    (this._speakerService
      .findAll())
      .subscribe((result) => (this.speakers = result));
  }
}
