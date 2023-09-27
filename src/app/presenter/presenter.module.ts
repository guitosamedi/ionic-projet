import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresenterPageRoutingModule } from './presenter-routing.module';

import { PresenterPage } from './presenter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresenterPageRoutingModule
  ],
  declarations: [PresenterPage]
})
export class PresenterPageModule {}
