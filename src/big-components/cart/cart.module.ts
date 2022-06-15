import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouteBannerComponent} from "../../shared-components/route-banner/route-banner.component";


@NgModule({
  declarations: [
    CartComponent,
    RouteBannerComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }
