import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {CartModule} from "../cart/cart.module";
import {CheckoutModule} from "../checkout/checkout.module";


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    CartModule,
    CheckoutModule
  ]
})
export class RegisterModule { }
