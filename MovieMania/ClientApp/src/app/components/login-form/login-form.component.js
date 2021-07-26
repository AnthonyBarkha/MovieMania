"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.loginForm = new forms_1.FormGroup({
            'username': new forms_1.FormControl('', forms_1.Validators.required),
            'password': new forms_1.FormControl('', forms_1.Validators.required)
        });
    };
    LoginFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var username = this.loginForm.value.username;
        var password = this.loginForm.value.password;
        this.authService.getUser(username, password).subscribe(function (user) {
            if (user !== null) {
                localStorage.setItem('currentUser', (user.id).toString());
                _this.authService.userSubject.next(user);
                _this.loginForm.reset();
                _this.router.navigate(["/movies"]);
            }
            else {
                _this.error = "Invalid credentials";
                _this.loginForm.reset();
            }
        });
    };
    LoginFormComponent = __decorate([
        core_1.Component({
            selector: 'app-login-form',
            templateUrl: './login-form.component.html',
            styleUrls: ['./login-form.component.css']
        })
    ], LoginFormComponent);
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=login-form.component.js.map