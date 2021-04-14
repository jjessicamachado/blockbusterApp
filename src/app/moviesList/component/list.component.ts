import { Component, OnInit } from '@angular/core';
import moviesList from './../../../assets/filmes.json';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  movies: any = moviesList;

  constructor() { }

  faChevronUp = faChevronUp;

  ngOnInit() {
    this.registerMovies();
  }

  registerMovies(): void {
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }

}
