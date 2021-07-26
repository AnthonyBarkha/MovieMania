"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileItemComponent = void 0;
var core_1 = require("@angular/core");
var ProfileItemComponent = /** @class */ (function () {
    function ProfileItemComponent(movieService, router) {
        this.movieService = movieService;
        this.router = router;
    }
    ProfileItemComponent.prototype.removeMovie = function (movie) {
        var _this = this;
        this.movieService.removeMovie(movie).subscribe(function (res) {
            _this.router.navigate(["/movies"]);
        });
    };
    ProfileItemComponent.prototype.onRate = function ($event) {
        alert("Old Value:" + $event.oldValue + ", \n      New Value: " + $event.newValue);
    };
    __decorate([
        core_1.Input()
    ], ProfileItemComponent.prototype, "movie", void 0);
    ProfileItemComponent = __decorate([
        core_1.Component({
            selector: 'app-profile-item',
            templateUrl: './profile-item.component.html',
            styleUrls: ['./profile-item.component.css']
        })
    ], ProfileItemComponent);
    return ProfileItemComponent;
}());
exports.ProfileItemComponent = ProfileItemComponent;
//# sourceMappingURL=profile-item.component.js.map