import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  imports: [],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {
  movieService=inject(MovieService)
  wishlist=this.movieService.wishlist
  router = inject(Router)
  navigateTo(id:number){
    this.router.navigate(['',id])
  }
}
