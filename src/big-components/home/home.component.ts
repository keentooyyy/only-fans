import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from "@angular/platform-browser";
import Swiper, {Navigation, SwiperOptions} from "swiper";

Swiper.use([Navigation])

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  title = "Home"

  popular_category_config: SwiperOptions = {
    modules: [Navigation], slidesPerView: 1, slidesPerGroup: 1, navigation: true, spaceBetween: 20, breakpoints: {
      576: {
        slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20
      },
      992: {
        slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 20
      },
      1200: {
        slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 20
      },
    }
  }
  hot_deals_config: SwiperOptions = {
    modules: [Navigation], slidesPerView: 1, slidesPerGroup: 1, navigation: true,  spaceBetween: 20,
    breakpoints: {
      992: {
        slidesPerView:2,
        slidesPerGroup:2,
        spaceBetween:20
      },
      1200: {
        slidesPerView:3,
        slidesPerGroup:3,
        spaceBetween:20
      },
    }
  }


  constructor(private TitleService: Title) {

  }

  ngOnInit(): void {
    this.TitleService.setTitle(this.title);
  }
}
