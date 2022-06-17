import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterMethodsService {

  constructor(private router: Router) { }
  toHome(){
    this.router.navigateByUrl('')
  }
  toCart(){
    this.router.navigateByUrl('cart')
  }
  toCheckout(){
    this.router.navigateByUrl('checkout')
  }
}
