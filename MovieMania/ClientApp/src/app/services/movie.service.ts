import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "../models/movie";

@Injectable({ providedIn: "root" })
export class MovieService {

  constructor(private http: HttpClient) { }

  getAvailableMovies() {
    let userId: number;
    if (localStorage.getItem('currentUser')) {
      userId = +(localStorage.getItem('currentUser'));
    }
    return this.http.get("api/Movie/GetAvailableMovies/" + userId);
  }

  addToProfile(movie: Movie) {
    let userId: number;
    if (localStorage.getItem('currentUser')) {
      userId = +(localStorage.getItem('currentUser'));
    }
    let body = {
      userId: userId,
      movieId: movie.id,
      reting: 0
    }
    return this.http.post("api/Movie/AddToProfile", body);
  }

  getProfileMovies() {
    let userId: number;
    if (localStorage.getItem('currentUser')) {
      userId = +(localStorage.getItem('currentUser'));
    }
    return this.http.get("api/Movie/GetProfileMovies/" + userId);
  }

  removeMovie(id: number) {
    return this.http.delete("api/Movie/RemoveMovie/" + id);
  }

  rateMovie(rating: number, id: number) {
    let body = {
      id: id,
      rating: rating
    }
    return this.http.put("api/Movie/RateMovie", body);
  }

}
