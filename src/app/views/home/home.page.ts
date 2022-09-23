import { Component, OnInit } from '@angular/core';
import { Movie, responseMDB } from 'src/app/models/features.model';
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
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1.5,
    speed: 800,
    spaceBetween: 0,
    freeMode: true,
    rewind: true,
  };
  recentMovies: Movie[] = [];
  popularis: Movie[] = [];
  trending: Movie[] = [];
  upcoming: Movie[] = [];
  constructor(private movieServices: MoviesService) {}

  ngOnInit() {
    this.movieServices.getFeatures().subscribe((res) => {
      this.recentMovies = res.results;
    });

    this.movieServices.getPopular().subscribe((popular) => {
      this.popularis = popular.results;
    });

    this.movieServices.getTrending().subscribe((trend) => {
      this.trending = trend.results;
    });

    this.movieServices.getUpcoming().subscribe((upcoming) => {
      this.upcoming = upcoming.results;
    });
  }
}
