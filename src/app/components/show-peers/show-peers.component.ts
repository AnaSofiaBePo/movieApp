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
  Grid,
} from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Zoom, Grid]);

@Component({
  selector: 'app-show-peers',
  templateUrl: './show-peers.component.html',
  styleUrls: ['./show-peers.component.scss'],
})
export class ShowPeersComponent implements OnInit {
  @Input() popularMovies: Movie[] = [];

  config: SwiperOptions = {
    slidesPerView: 4,
    grid:{
      rows:2,
    },
    speed: 400,
    freeMode: true,
    resizeObserver: true,
      breakpoints:{
        340:{
             slidesPerView: 3,
             speed: 400,
             grid: {
              rows: 2,
            },
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
              grid: {
                rows: 3,
              },
            },
            1024: {
              slidesPerView: 5,
              grid:{
                rows:2,
              },
              spaceBetween: 10,
            },
     }
  };
  constructor() {}

  ngOnInit() {}
}
