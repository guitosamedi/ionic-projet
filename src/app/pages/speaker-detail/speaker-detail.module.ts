import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeakerDetailPageRoutingModule } from './speaker-detail-routing.module';

import { SpeakerDetailPage } from './speaker-detail.page';
import {SharedModule} from "../../shared/modules/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SpeakerDetailPageRoutingModule,
        SharedModule
    ],
  declarations: [SpeakerDetailPage]
})
export class SpeakerDetailPageModule {}
