import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: Movie[];
  movies$: Observable<Movie[]>;
  searchMovieName: string;
  selectedMovie: Movie;
  currPage: number;
  maxPage: number;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.currPage = 0;
    this.movieService.query();
    this.movies$ = this.movieService.movies$;
  }

  async onSelectMovie(movieId: string) {
    var selectedMovie = await this.movieService.getById(movieId).toPromise();
    this.selectedMovie = selectedMovie;
  }

  closeModal() {
    this.selectedMovie = null;
  }
  async searchMovies() {
    this.currPage = 1;

    if (!this.searchMovieName) {
      this.setDefMovies();
      return;
    }
    this.setMovies();
  }

  setDefMovies() {
    this.movieService.setDefMovies();
    this.currPage = 0;
    this.searchMovieName = '';
  }

  async setMovies() {
    var res = await this.movieService
      .getByTitle(this.searchMovieName, this.currPage)
      .toPromise();
    this.maxPage = Math.floor(res.totalResults / 10);
    this.movieService.changeMovies(res.Search);
  }

  async nextPage() {
    if (this.currPage === this.maxPage) return;
    this.currPage = this.currPage + 1;
    this.setMovies();
  }

  async prevPage() {
    if (this.currPage === 1) return;
    this.currPage = this.currPage - 1;
    this.setMovies();
  }
}
