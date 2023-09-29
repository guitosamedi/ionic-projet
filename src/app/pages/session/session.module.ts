import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SessionPageRoutingModule } from './session-routing.module';
import {SharedModule} from "../../shared/modules/shared.module";

import { SessionPage } from './session.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionPageRoutingModule,
    SharedModule,

  ],
  declarations: [SessionPage]
})
export class SessionPageModule {}
