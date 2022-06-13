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
  slidesPerview = 2
  public innerWidth: any


  config: SwiperOptions = {
    modules: [Navigation],
    slidesPerView: 2,
    slidesPerGroup: 2,
    navigation: true,
    spaceBetween: 20,
    breakpoints: {
      960: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      }
    }
  }


  constructor(private TitleService: Title) {

  }

  ngOnInit(): void {
    this.TitleService.setTitle(this.title);
  }
}
