import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import {CartModule} from "../cart/cart.module";
import {SwiperModule} from "swiper/angular";


@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    CartModule,
    SwiperModule
  ]
})
export class AboutUsModule { }
