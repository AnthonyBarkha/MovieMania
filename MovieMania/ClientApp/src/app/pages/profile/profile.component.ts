import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { ProfileMovie } from '../../models/profileMovie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  movies: Array<ProfileMovie>;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getProfileMovies().subscribe((movies: Array<ProfileMovie>) => {
      this.movies = movies;
    });
  }

}
