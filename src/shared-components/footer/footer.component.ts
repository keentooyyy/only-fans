import {Component, Input, OnInit} from '@angular/core';
import {RouterMethodsService} from "../../services/router-methods.service";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-footer', templateUrl: './footer.component.html', styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() navbar: NavbarComponent;

  constructor(public routerMethod: RouterMethodsService) {
  }

  ngOnInit(): void {
  }
}
