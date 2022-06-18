import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CartRoutingModule} from './cart-routing.module';
import {CartComponent} from './cart.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CartItemComponent} from "../../shared-components/cart-item/cart-item.component";
import {CartSummaryComponent} from "../../shared-components/cart-summary/cart-summary.component";
import {RouteBannerComponent} from "../../shared-components/route-banner/route-banner.component";



@NgModule({
  declarations: [
    CartComponent,
    CartSummaryComponent,
    CartItemComponent,
    RouteBannerComponent
  ],
  exports: [
    CartSummaryComponent,
    CartItemComponent,
    RouteBannerComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CartModule {
}
