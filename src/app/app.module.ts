import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NavbarComponent} from '../shared-components/navbar/navbar.component';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {HomeModule} from '../big-components/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, BrowserAnimationsModule, MatSidenavModule],
  providers: [Title, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
