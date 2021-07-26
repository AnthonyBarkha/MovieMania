"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegisterFormComponent = /** @class */ (function () {
    function RegisterFormComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterFormComponent.prototype.ngOnInit = function () {
        this.registerForm = new forms_1.FormGroup({
            'firstName': new forms_1.FormControl('', forms_1.Validators.required),
            'lastName': new forms_1.FormControl('', forms_1.Validators.required),
            'username': new forms_1.FormControl('', forms_1.Validators.required),
            'password': new forms_1.FormControl('', forms_1.Validators.required)
        });
    };
    RegisterFormComponent.prototype.onSubmit = function () {
        var firstName = this.registerForm.value.firstName;
        var lastName = this.registerForm.value.lastName;
        var username = this.registerForm.value.username;
        var password = this.registerForm.value.password;
        this.authService.register(firstName, lastName, username, password).subscribe(function (res) {
            console.log("success post");
        });
        this.registerForm.reset();
        this.router.navigate(["/login"]);
    };
    RegisterFormComponent = __decorate([
        core_1.Component({
            selector: 'app-register-form',
            templateUrl: './register-form.component.html',
            styleUrls: ['./register-form.component.css']
        })
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());
exports.RegisterFormComponent = RegisterFormComponent;
//# sourceMappingURL=register-form.component.js.map