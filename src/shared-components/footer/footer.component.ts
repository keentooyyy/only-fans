import {Component, OnInit} from '@angular/core';
import {RouterMethodsService} from "../../services/router-methods.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public routerMethod: RouterMethodsService) {
  }

  ngOnInit(): void {
  }
}
