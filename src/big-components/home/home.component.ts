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
    modules: [Navigation], slidesPerView: 1, slidesPerGroup: 1, navigation: true, spaceBetween: 0, breakpoints: {
      550: {
        slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20
      },
      840: {
        slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 20
      }
    }
  }
  hot_deals_config: SwiperOptions = {
    modules: [Navigation], slidesPerView: 1, slidesPerGroup: 1, navigation: true, // spaceBetween: 10,
    breakpoints: {
    }
  }


  constructor(private TitleService: Title) {

  }

  ngOnInit(): void {
    this.TitleService.setTitle(this.title);
  }
}
