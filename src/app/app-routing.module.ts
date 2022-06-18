import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  { path: '/', loadChildren: () => import('../big-components/home/home.module').then(m => m.HomeModule) },
  { path: 'cart', loadChildren: () => import('../big-components/cart/cart.module').then(m => m.CartModule) },
  { path: 'checkout', loadChildren: () => import('../big-components/checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'login', loadChildren: () => import('../big-components/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
