import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/features.model';
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Zoom,
  SwiperOptions,
} from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Zoom]);

@Component({
  selector: 'app-slides-show-poster',
  templateUrl: './slides-show-poster.component.html',
  styleUrls: ['./slides-show-poster.component.scss'],
})
export class SlidesShowPosterComponent implements OnInit {
  @Input() posterMovies: Movie[] = [];

  config: SwiperOptions = {
    slidesPerView: 4,
    speed: 400,
    spaceBetween: 0.5,
    freeMode: true,
    resizeObserver: true,
    breakpoints:{
      340:{
           slidesPerView: 3.3,
           speed: 400
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
   }

  };
  constructor() {}

  ngOnInit() {}
}
