// https://bobcares.com/blog/custom-component-and-shared-module-in-ionic/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../../components/header/header.component";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent],
})
export class SharedModule { }
