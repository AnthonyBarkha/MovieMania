import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileItemComponent } from './components/profile-item/profile-item.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MoviesComponent,
    ProfileComponent,
    LoginFormComponent,
    RegisterFormComponent,
    MoviesListComponent,
    MovieItemComponent,
    ProfileListComponent,
    ProfileItemComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'movies', component: MoviesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '**', redirectTo: '/login' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
