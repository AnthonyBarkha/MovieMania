import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from "../../models/user";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  error: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    let username: string = this.loginForm.value.username;
    let password: string = this.loginForm.value.password;
    this.authService.getUser(username, password).subscribe((user: User) => {
      if (user !== null) {
        localStorage.setItem('currentUser', (user.id).toString());
        this.loginForm.reset();
        this.router.navigate(["/movies"]);
      }
      else {
        this.error = "Invalid credentials";
        this.loginForm.reset();
      }
    });
    
    
  }

}
