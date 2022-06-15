import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from '../big-components/home/home.component';
import {NavbarComponent} from '../shared-components/navbar/navbar.component';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {SwiperModule} from "swiper/angular";
import {RouteBannerComponent} from '../shared-components/route-banner/route-banner.component';
import {CartComponent} from '../big-components/cart/cart.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, FooterComponent, RouteBannerComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule, SwiperModule, ReactiveFormsModule],
  providers: [Title, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
