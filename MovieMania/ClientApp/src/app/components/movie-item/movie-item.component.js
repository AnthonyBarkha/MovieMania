"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieItemComponent = void 0;
var core_1 = require("@angular/core");
var MovieItemComponent = /** @class */ (function () {
    function MovieItemComponent(movieService, router) {
        this.movieService = movieService;
        this.router = router;
    }
    MovieItemComponent.prototype.addToProfile = function (movie) {
        var _this = this;
        this.movieService.addToProfile(movie).subscribe(function (res) {
            _this.router.navigate(["/profile"]);
        });
    };
    __decorate([
        core_1.Input()
    ], MovieItemComponent.prototype, "movie", void 0);
    MovieItemComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-item',
            templateUrl: './movie-item.component.html',
            styleUrls: ['./movie-item.component.css']
        })
    ], MovieItemComponent);
    return MovieItemComponent;
}());
exports.MovieItemComponent = MovieItemComponent;
//# sourceMappingURL=movie-item.component.js.map