"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.userSubject = new rxjs_1.BehaviorSubject(null);
    }
    AuthService.prototype.register = function (firstName, lastName, username, password) {
        var body = {
            FirstName: firstName,
            LastName: lastName,
            Username: username,
            Password: password
        };
        return this.http.post("api/User/AddUser", body);
    };
    AuthService.prototype.getUser = function (username, password) {
        return this.http.get("api/User/GetUser/" + username + "/" + password);
    };
    AuthService = __decorate([
        core_1.Injectable({ providedIn: "root" })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map