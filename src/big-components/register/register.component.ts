import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title = "Register"
  constructor(private TitleService: Title) { }

  ngOnInit(): void {
    this.TitleService.setTitle(this.title)
  }

}
