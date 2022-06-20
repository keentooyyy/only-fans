import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import Swiper, {Pagination, SwiperOptions} from "swiper";

Swiper.use([Pagination])

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutUsComponent implements OnInit {


  team_config: SwiperOptions = {
    modules: [Pagination], slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20, pagination: {
      type: "fraction",
    },
    breakpoints: {
      768: {
        slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 20
      }
    }
  }


  constructor() {
  }

  ngOnInit(): void {
  }

}
