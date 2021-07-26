import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    let firstName: string = this.registerForm.value.firstName;
    let lastName: string = this.registerForm.value.lastName;
    let username: string = this.registerForm.value.username;
    let password: string = this.registerForm.value.password;
    this.authService.register(firstName, lastName, username, password).subscribe(res => {
      console.log("success post");
    });
    this.registerForm.reset();
    this.router.navigate(["/login"]);
  }

}
