import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import moviesList from './../../../assets/filmes.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  movies: any = moviesList;

  constructor() { }

  ngOnInit() {
    this.registerMovies();
  }

  registerMovies(): void {
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }

}
