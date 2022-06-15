import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  title = "Shopping Cart"
  constructor(private TitleService: Title) { }

  ngOnInit(): void {
    this.TitleService.setTitle(this.title)
  }

}
