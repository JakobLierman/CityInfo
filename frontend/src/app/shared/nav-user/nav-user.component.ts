import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../user/authentication.service";
import {User} from "../../user/user.model";

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {
  public errorMsg: string;
  private _currentUser: User;

  constructor(private _auth: AuthenticationService) { }

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
