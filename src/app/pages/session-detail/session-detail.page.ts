import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SessionService} from '../../shared/services/session.service';
import {Session} from '../../shared/models/session';
import {SpeakerService} from '../../shared/services/speaker.service';
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
  ) {
  }

  ngOnInit() {
    this._init();
  }
// TODO = Fix: affichage detail speakers par session ID

  private _init() {
    this._activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        // Forcer le paramètre ID en type number
        const sessionId = +id;
        if (!isNaN(sessionId)) {
          // Récupérer les détails de la session par ID
          this._sessionService.findById(sessionId).subscribe(result => {
            this.session = result;
            console.log('Details de la session:', result);
            // On vérifie s'il y a une session
            if (result) {
              // On vérifie s'il y a des speakers
              if (result.speakers && Array.isArray(result.speakers)) {
                // Récupérer la liste de tous les speakers
                this._speakerService.findAll().subscribe(speakers => {
                  console.log('ID de la session:', result.id);
                  console.log('Orateurs de la session:', result.speakers);
                  // Initialiser la liste des détails des speakers liés à la session
                  this.speakers = speakers;
                  if (result.speakers) {
                    // Utiliser une boucle for...of pour itérer sur les IDs des speakers
                    for (const id of result.speakers) {
                      // Forcer le paramètre ID en type number
                      const idSpeaker = +id;
                      console.log('Recherche du présentateur avec ID :', idSpeaker);
                      if (!isNaN(idSpeaker)) {
                        const speakerDetail = speakers.find(speaker => speaker.id === idSpeaker);
                        if (speakerDetail) {
                          console.log('Présentateur trouvé :', speakerDetail);
                          speakers.push(speakerDetail);
                        } else {
                          console.log('Aucun présentateur trouvé pour l\'ID :', idSpeaker);
                        }
                      }
                    }
                  }
                });
              }
            }
          });
        }
      }
    });
  }

}
