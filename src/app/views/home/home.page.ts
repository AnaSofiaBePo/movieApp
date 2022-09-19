import { Component, OnInit } from '@angular/core';
import { Movie, responseMDB } from 'src/app/models/features.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  recentMovies: Movie[] = [];
  constructor(private movieServices: MoviesService) { }

  ngOnInit() {
    this.movieServices.getFeatures().subscribe((res) => {
      console.log('respuesta', res.results);
      this.recentMovies = res.results;
    });
  }

}
