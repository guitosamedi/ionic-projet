import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import {TabsComponent} from "./components/tabs/tabs.component";
import {FooterComponent} from "./components/footer/footer.component";
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/modules/shared.module";


@NgModule({
  declarations: [AppComponent, TabsComponent, FooterComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  exports: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
