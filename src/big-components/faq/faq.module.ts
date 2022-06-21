import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import {CartModule} from "../cart/cart.module";


@NgModule({
  declarations: [
    FaqComponent
  ],
    imports: [
        CommonModule,
        FaqRoutingModule,
        CartModule
    ]
})
export class FaqModule { }
