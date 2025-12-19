import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { MovieService } from '../../services/movie-service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-head-bar',
  imports: [FontAwesomeModule, NgStyle],
  templateUrl: './head-bar.html',
  styleUrl: './head-bar.css',
})
export class HeadBar {
  faHeart = faHeart
  router=inject(Router)
  movieService=inject(MovieService)

  navigateTo(){
    this.router.navigate(['wishlist'])
  }
  setHeartStyle(){
    if(this.movieService.wishlist.length)
      return {'color' : 'red'}
    else
      return
  }
}
