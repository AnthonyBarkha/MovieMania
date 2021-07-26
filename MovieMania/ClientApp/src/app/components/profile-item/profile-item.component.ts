import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { StarRatingComponent } from 'ng-starrating';
import { ProfileMovie } from '../../models/profileMovie';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.css']
})
export class ProfileItemComponent {

  constructor(private movieService: MovieService, private router: Router) { }

  @Input() movie: ProfileMovie;

  removeMovie(id: number): void {
    this.movieService.removeMovie(id).subscribe(res => {
      this.router.navigate(["/movies"]);
    });
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }, id: number) {
    this.movieService.rateMovie($event.newValue, id).subscribe();
  }

}
