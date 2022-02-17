import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss'],
})
export class MoviePreviewComponent implements OnInit {
  @Input() movie: Movie;
  @Output() onSelectMovie = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
