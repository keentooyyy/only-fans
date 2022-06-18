import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RouterMethodsService} from "../../services/router-methods.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output()
  hamclick: EventEmitter<any> = new EventEmitter<any>()
  constructor(public routerMethod: RouterMethodsService) {
  }

  ngOnInit(): void {
  }

  test(){
    this.hamclick.emit('ham')
  }
}
