import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/features.model';
import { MoviesService } from 'src/app/services/movies.service';

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
  selector: 'app-slides-show-backdrop',
  templateUrl: './slides-show-backdrop.component.html',
  styleUrls: ['./slides-show-backdrop.component.scss'],
})
export class SlidesShowBackdropComponent implements OnInit {
  @Input() recentMovies: Movie[] = [];

  config: SwiperOptions = {
    slidesPerView: 4,
    speed: 800,
    spaceBetween: 0.5,
    freeMode: true,
    resizeObserver: true,
    breakpoints:{
      340:{
           slidesPerView: 2,
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
