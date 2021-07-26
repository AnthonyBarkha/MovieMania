import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { ProfileMovie } from '../../models/profileMovie';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent {

  @Input() movies: Array<ProfileMovie>;


}
