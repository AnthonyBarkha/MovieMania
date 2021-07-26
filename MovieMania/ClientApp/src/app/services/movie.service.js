"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
var core_1 = require("@angular/core");
var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
    }
    MovieService.prototype.getAvailableMovies = function () {
        var userId;
        if (localStorage.getItem('currentUser')) {
            userId = +(localStorage.getItem('currentUser'));
        }
        return this.http.get("api/Movie/GetAvailableMovies/" + userId);
    };
    MovieService.prototype.addToProfile = function (movie) {
        var userId;
        if (localStorage.getItem('currentUser')) {
            userId = +(localStorage.getItem('currentUser'));
        }
        var body = {
            userId: userId,
            movieId: movie.id,
            reting: 0
        };
        return this.http.post("api/Movie/AddToProfile", body);
    };
    MovieService.prototype.getProfileMovies = function () {
        var userId;
        if (localStorage.getItem('currentUser')) {
            userId = +(localStorage.getItem('currentUser'));
        }
        return this.http.get("api/Movie/GetProfileMovies/" + userId);
    };
    MovieService.prototype.removeMovie = function (movie) {
        var userId;
        if (localStorage.getItem('currentUser')) {
            userId = +(localStorage.getItem('currentUser'));
        }
        return this.http.delete("api/Movie/RemoveMovie/" + userId + "/" + movie.id);
    };
    MovieService = __decorate([
        core_1.Injectable({ providedIn: "root" })
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map