import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {TabsComponent} from "./components/tabs/tabs.component";
import {FooterComponent} from "./components/footer/footer.component";
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent, HeaderComponent, TabsComponent, FooterComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}
