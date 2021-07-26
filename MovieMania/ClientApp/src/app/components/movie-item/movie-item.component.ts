import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {

  constructor(private movieService: MovieService, private router: Router) { }

  @Input() movie: Movie;

  addToProfile(movie: Movie): void {
    this.movieService.addToProfile(movie).subscribe(res => {
      this.router.navigate(["/profile"]);
    });
    
  }

}
