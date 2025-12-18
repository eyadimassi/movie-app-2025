import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-movie-list',
  imports: [],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit{
  movieList:Movie[]=[]
  movieService=inject(MovieService)
  ngOnInit(): void {
    this.movieService.getMovieList().subscribe(
      Response=>this.movieService.movieList=Response
    )
  }

}
