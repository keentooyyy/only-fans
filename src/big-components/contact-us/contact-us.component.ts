import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  title = "Contact Us"
  constructor(private TitleService: Title) { }

  ngOnInit(): void {
    this.TitleService.setTitle(this.title)
  }

}
