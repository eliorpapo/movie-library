import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss'],
})
export class MovieModalComponent implements OnInit {
  @Input() movie: Movie;
  @Output() onCloseModal = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}
