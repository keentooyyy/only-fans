import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-cart', templateUrl: './cart.component.html', styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  quantity: any

  title = "Shopping Cart"
  price = 3000
  subtotal = 0
  constructor(private TitleService: Title) {
  }

  ngOnInit(): void {
    this.TitleService.setTitle(this.title)
    this.quantity = new FormControl(1)
    this.calcSubtotal()

    this.quantity.valueChanges.subscribe(() =>{
      this.calcSubtotal()
    })
  }


  addValue() {
    this.quantity.setValue(this.quantity.value + 1)
    this.calcSubtotal()
  }
  decreaseValue(){
    if (this.quantity.value <= 1){
      this.quantity.setValue(1)
    }
    else {
      this.quantity.setValue(this.quantity.value - 1)
    }
    this.calcSubtotal()
  }
  calcSubtotal(){
    this.subtotal = this.quantity.value * this.price
  }

}
