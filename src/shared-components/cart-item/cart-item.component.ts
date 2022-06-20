import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input()
  withClose = true

  @Input()
  imgSrc: any

  @Input()
  product_name: any

  @Input()
  product_price: any
  constructor() { }

  ngOnInit(): void {
  }

}
