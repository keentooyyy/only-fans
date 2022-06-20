import { Component, OnInit } from '@angular/core';
import {RouterMethodsService} from "../../services/router-methods.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = "Login"
  constructor(public routerMethods: RouterMethodsService, private TitleService: Title) { }

  ngOnInit(): void {
    this.TitleService.setTitle(this.title)
  }

}
