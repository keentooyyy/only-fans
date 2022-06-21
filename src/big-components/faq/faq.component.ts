import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  hidden = true

  constructor() {
  }

  ngOnInit(): void {
  }

  showAns(event: any) {

    let title = event.target.getElementsByClassName('title')

    let ans = event.target.getElementsByClassName('ans')
    ans[0].classList.toggle('tw-hidden')
    title[0].classList.toggle('color-main')
    this.parentBorder(event)
    this.icon(event)


  }

  parentBorder(event: any) {
    let parent = event.target.getElementsByClassName('parent')
    if (parent[0].classList.contains('tw-border-gray-400')) {
      parent[0].classList.remove('tw-border-gray-400')
      parent[0].classList.add('border-blue')
    } else {
      parent[0].classList.add('tw-border-gray-400')
      parent[0].classList.remove('border-blue')
    }
  }

  icon(event: any){
    let icon = event.target.getElementsByClassName('icon')
    if (icon[0].classList.contains('fa-plus')){
      icon[0].classList.remove('fa-plus')
      icon[0].classList.add('fa-minus')
      icon[0].classList.add('color-main')
    }
    else
    {
      icon[0].classList.add('fa-plus')
      icon[0].classList.remove('fa-minus')
      icon[0].classList.remove('color-main')
    }
  }
}
