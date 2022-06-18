import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import {CartModule} from "../cart/cart.module";
import {CheckoutModule} from "../checkout/checkout.module";


@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    CartModule,
    CheckoutModule
  ]
})
export class ContactUsModule { }
