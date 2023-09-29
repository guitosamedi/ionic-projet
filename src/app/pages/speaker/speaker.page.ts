import { Component, OnInit } from '@angular/core';
import {Speaker} from "../../shared/models/speaker";
import {SpeakerService} from "../../shared/services/speaker.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.page.html',
  styleUrls: ['./speaker.page.scss'],
})

export class SpeakerPage implements OnInit {

  speakers: Speaker[] = [];
  pageTitle = 'Présentateurs';
  public _imgUrl = environment.api.images;
  constructor(private _speakerService: SpeakerService) { }

  ngOnInit() {
    this._init();
  }

  private async _init() {
    (await this._speakerService
      .findAll())
      .subscribe((result) => (this.speakers = result));
    await console.log(this.speakers);
  }
}
