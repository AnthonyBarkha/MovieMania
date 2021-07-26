import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Array<Movie>;
  search: string = "";

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getAvailableMovies().subscribe((movies: Array<Movie>) => {
      this.movies = movies;
    });
  }

}
