import { Component, OnInit } from '@angular/core';
import {Speaker} from "../../shared/models/speaker";
import {SpeakerService} from "../../shared/services/speaker.service";

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.page.html',
  styleUrls: ['./speaker.page.scss'],
})

export class SpeakerPage implements OnInit {

  speakers: Speaker[] = [];
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
