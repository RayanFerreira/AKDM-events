import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private BaseApipath = "https://api.themoviedb.org/3";
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  GetLatestMovies(){
    return this.http.get(this.BaseApipath + "/movie/popular?api_key=67cd667be83a07ebd062dd48dea1dc3a")
  }
}
