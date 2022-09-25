/* eslint-disable @typescript-eslint/member-ordering */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
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
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Zoom,
  Grid,
  IonicSlides,
]);

@Component({
  selector: 'app-show-peers',
  templateUrl: './show-peers.component.html',
  styleUrls: ['./show-peers.component.scss'],
})
export class ShowPeersComponent implements OnInit {
  @Input() popularMovies: Movie[];
  @Output() loadMore = new EventEmitter();
  isLast = false;

  config: SwiperOptions = {
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    grid: {
      rows: 2,
    },
    speed: 400,
    freeMode: true,
    breakpoints: {
      340: {
        slidesPerView: 3,
        speed: 400,
        grid: {
          rows: 2,
        },
        watchOverflow: true,
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
        grid: {
          rows: 2,
        },
        spaceBetween: 10,
        observer: true,
        observeParents: true,
      },
    },
  };

  constructor() {}

   ngOnInit() {
    if(this.popularMovies === undefined){
      console.log(this.popularMovies,'UNDEFINED');
    }
    if (this.popularMovies[2]) {
      console.log('CARGO');
    }
    console.log(this.popularMovies);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.isLast;
  }

  // transitionEnd(): void {
  //   this.loadMore.emit();
  //   console.log('slide end');
  // }

  onSwiper(swiper) {
    swiper.update();
  }

  lengthChange() {
    console.log('ha cambioado la cantidad de slides');
  }
  load() {
    this.loadMore.emit();
  }
}
