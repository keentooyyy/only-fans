import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {RouterMethodsService} from "../services/router-methods.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'only-fans';
  innerwidth: any
  @ViewChild('sidenav') sideNav: MatSidenav

  constructor(public routerMethod: RouterMethodsService) {
  }
  @HostListener('window:resize', ['$event'])




  ngOnInit(){
    this.getWidth()
  }

  hamclicked(){
    this.sideNav.toggle()
  }
  getWidth(){
    this.innerwidth = window.innerWidth;
    if (this.innerwidth >= 992){
      this.closeSideNav()
    }
  }

  closeSideNav(){
    this.sideNav.close()
  }
  toContact(){
    this.closeSideNav()
    this.routerMethod.toContactUs()
  }

  toAboutUs(){
    this.closeSideNav()
    this.routerMethod.toAboutUs()
  }
  toHome(){
    this.closeSideNav()
    this.routerMethod.toHome()
  }
  toFAQ(){
    this.closeSideNav()
    this.routerMethod.toFAQ()
  }
}

