import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {RouterMethodsService} from "../../services/router-methods.service";

@Component({
  selector: 'app-cart', templateUrl: './cart.component.html', styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  title = "Shopping Cart"

  constructor(private TitleService: Title, public routerMethods: RouterMethodsService) {
  }

  ngOnInit(): void {
    this.TitleService.setTitle(this.title)
  }

}
