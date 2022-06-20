import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  title = "Checkout"
  constructor(private TitleService: Title) {
  }

  ngOnInit(): void {
    this.TitleService.setTitle(this.title)
  }

  checkRadio(x: any) {
    let input = x.target.previousSibling
    input.checked = true
  }
}
