import {Component, OnInit} from '@angular/core';
import {RouterMethodsService} from "../../services/router-methods.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public routerMethod: RouterMethodsService) {
  }

  ngOnInit(): void {
  }
}
