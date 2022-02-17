import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @Input() movies: Movie[];
  @Output() onSelectMovie = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}
