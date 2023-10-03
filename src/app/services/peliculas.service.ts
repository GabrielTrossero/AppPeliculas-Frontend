import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private urlBase = 'http://localhost:5170/';
  private urlSecond = 'api/movie/';

  constructor(private httpClient: HttpClient) {}

  getMovies(): Observable<any> {
    return this.httpClient.get(this.urlBase + this.urlSecond);
  }
}
