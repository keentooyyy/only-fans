import { Component, OnInit } from '@angular/core';
import {RouterMethodsService} from "../../services/router-methods.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public routerMethods: RouterMethodsService) { }

  ngOnInit(): void {
  }

}
