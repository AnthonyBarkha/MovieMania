import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {

  @Input() movies: Array<Movie>;


}
