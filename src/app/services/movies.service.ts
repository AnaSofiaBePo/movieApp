/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { responseMDB } from '../models/features.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFeatures(){
    return this.http.get<responseMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-08-01&primary_release_date.lte=2022-09-01&api_key=ba31013e258becf1fbed1910e77bc7d6`);
  }
}
