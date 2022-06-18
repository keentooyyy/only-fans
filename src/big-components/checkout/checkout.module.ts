import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CheckoutRoutingModule} from './checkout-routing.module';
import {CheckoutComponent} from './checkout.component';
import {CartModule} from "../cart/cart.module";
import {WrapperComponent} from "../../shared-components/wrapper/wrapper.component";


@NgModule({
  declarations: [
    CheckoutComponent,
    WrapperComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    CartModule,
  ],
  exports: [
    WrapperComponent
  ]
})
export class CheckoutModule {
}
