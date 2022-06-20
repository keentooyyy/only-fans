import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  { path: '/', loadChildren: () => import('../big-components/home/home.module').then(m => m.HomeModule) },
  { path: 'cart', loadChildren: () => import('../big-components/cart/cart.module').then(m => m.CartModule) },
  { path: 'checkout', loadChildren: () => import('../big-components/checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'login', loadChildren: () => import('../big-components/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('../big-components/register/register.module').then(m => m.RegisterModule) },
  { path: 'contact-us', loadChildren: () => import('../big-components/contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: 'about-us', loadChildren: () => import('../big-components/about-us/about-us.module').then(m => m.AboutUsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
