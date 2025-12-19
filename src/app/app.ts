import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { HeadBar } from "./components/head-bar/head-bar";
import { SearchBar } from "./components/search-bar/search-bar";
import { MovieList } from './components/movie-list/movie-list';
import { MovieCard } from './components/movie-card/movie-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadBar, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movie-app');
}
