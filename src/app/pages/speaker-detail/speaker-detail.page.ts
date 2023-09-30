import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import {SpeakerService} from "../../shared/services/speaker.service";
import {Speaker} from "../../shared/models/speaker";

@Component({
  selector: 'app-speaker-detail',
  templateUrl: './speaker-detail.page.html',
  styleUrls: ['./speaker-detail.page.scss'],
})
export class SpeakerDetailPage implements OnInit {
  speaker: Speaker | null = null;
  pageTitle = 'Présentateur';
  public _imgUrl = environment.api.images;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _speakerService: SpeakerService
  ) { }

  ngOnInit() {
    this._init();
  }
  private _init() {
    this._activatedRoute.paramMap.subscribe(params => {
      const idSpeakerParam = params.get('id');
      if (idSpeakerParam !== null) {
        // Forcer le paramètre ID en type number
        const speakerId = +idSpeakerParam;
        if (!isNaN(speakerId)) {
          this._speakerService.findById(speakerId).subscribe(result => {
            this.speaker = result;
        });
        }
      }
    })
  }

}
