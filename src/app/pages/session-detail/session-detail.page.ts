import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SessionService} from '../../shared/services/session.service';
import {Session} from '../../shared/models/session';
import {SpeakerService} from '../../shared/services/speaker.service';
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.page.html',
  styleUrls: ['./session-detail.page.scss'],
})
export class SessionDetailPage implements OnInit {
  session: Session | null = null;
  sessionSpeakers: any[] = [];
  pageTitle = 'Session';
  public _imgUrl = environment.api.images;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _sessionService: SessionService,
    private _speakerService: SpeakerService,
    private router: Router
  ) {}

  ngOnInit() {
    this._init();
  }

  goToSpeakerDetail(speakerId: string) {
    this.router.navigate(['/speaker', speakerId]);
  }

  private _init() {
    this._activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this._sessionService.findById(id).subscribe(result => {
          this.session = result;
          if (result && Array.isArray(result.speakers)) {
            // Récupérer la liste des IDs des speakers de la session
            const speakerIds = result.speakers;

            // Récupérer la liste de tous les speakers depuis le service speakers
            this._speakerService.findAll().subscribe(speakers => {
              // Initialiser un tableau pour stocker les valeurs trouvées
              this.sessionSpeakers = [];

              // Parcourir la liste des IDs des speakers et trouver les correspondances
              for (const speakerId of speakerIds) {
                // Forcer le paramètre ID en type number
                const id = +speakerId;
                if (!isNaN(id)) {
                  const matchingValue = speakers.find(speaker => speaker.id === id.toString());
                  if (matchingValue) {
                    this.sessionSpeakers.push(matchingValue);
                  }
                }
              }
            });
          }
        });
      }
    });
  }
}
