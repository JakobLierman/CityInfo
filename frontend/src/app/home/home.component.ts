import {Component, OnInit} from '@angular/core';
import {User} from "../user/user.model";
import {AuthenticationService} from "../user/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private _currentUser: User;

  constructor(private _auth: AuthenticationService) {
  }

  get currentUser(): User {
    return this._currentUser;
  }

  ngOnInit() {
    if (this._auth.token) {
      this._auth.currentUser$.subscribe(
        (user: User) => (this._currentUser = user)
      );
    }
  }
}
