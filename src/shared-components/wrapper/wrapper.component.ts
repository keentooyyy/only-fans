import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  @Input()
  title = "Title"
  constructor() { }

  ngOnInit(): void {
  }

}
