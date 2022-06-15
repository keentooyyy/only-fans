import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-route-banner',
  templateUrl: './route-banner.component.html',
  styleUrls: ['./route-banner.component.scss']
})
export class RouteBannerComponent implements OnInit {

  @Input()
  currentRoute: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
