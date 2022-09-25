/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { responseMDB } from '../models/features.model';
const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private popularsPage = 0;
  constructor(private http: HttpClient) {}

  private executeQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}`;
    return this.http.get<T>(query);
  }

  getPopular() {
    this.popularsPage++;

    const query = `/movie/popular?&page=${this.popularsPage}`;

    return this.executeQuery<responseMDB>(query);
  }

  getTrending() {

    const query = '/trending/all/week?';

    return this.executeQuery<responseMDB>(query);
  }

  getUpcoming() {

    const query = '/movie/upcoming?';

    return this.executeQuery<responseMDB>(query);
  }

  getFeatures(){
    const today = new Date();
    const lastDay = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate();
    const month = today.getMonth() + 1;
    let monthString;

    if (month < 10) {
      monthString = '0' + month;
    } else {
      monthString = month;
    }

    const start = `${today.getFullYear()}-${monthString}-01`;
    const end = `${today.getFullYear()}-${monthString}-${lastDay}`;

    return this.executeQuery<responseMDB>(
      `/discover/movie?primary_release_date.gte=${start}&primary_release_date.lte=${end}&`
    );
  }
}
