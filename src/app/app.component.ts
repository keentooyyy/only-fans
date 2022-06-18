import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'only-fans';
  @ViewChild('sidenav') sideNav: MatSidenav

  hamclicked(){
    this.sideNav.toggle()
  }
}

