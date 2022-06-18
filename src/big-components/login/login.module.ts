import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {CartModule} from "../cart/cart.module";
import {CheckoutModule} from "../checkout/checkout.module";


@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        CartModule,
        CheckoutModule
    ]
})
export class LoginModule { }
