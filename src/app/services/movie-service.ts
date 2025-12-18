import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  private http=inject(HttpClient)
  private apikey = environment.apikey

  public movieList:Movie[]=[]
  getMovieList():Observable<Movie[]>{
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apikey}`).pipe(map((Response:any)=>Response.results))
  }
  
}
