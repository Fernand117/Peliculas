import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiKey = "076b00125e643e0776e593be1e37a289";
  private url = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) { }

  listaPeliculas() {
    return this.http.get(`${this.url}/discover/movie?api_key=${this.apiKey}&language=es&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate`);
  }

  listaGeneros() {
    return this.http.get(`${this.url}/genre/movie/list?api_key=${this.apiKey}&language=es`);
  }
}
