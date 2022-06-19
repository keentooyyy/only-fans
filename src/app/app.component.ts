import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'only-fans';
  innerwidth: any
  @ViewChild('sidenav') sideNav: MatSidenav
  @HostListener('window:resize', ['$event'])

  ngOnInit(){
    this.getWidth(innerWidth)
  }

  hamclicked(){
    this.sideNav.toggle()
  }
  getWidth(event: any){
    this.innerwidth = window.innerWidth;
    if (this.innerwidth >= 992){
      this.sideNav.close()
    }
    // console.log(this.innerwidth)
  }
}

