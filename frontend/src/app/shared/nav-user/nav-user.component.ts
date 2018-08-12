import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../user/authentication.service";
import {User} from "../../user/user.model";
import {HttpErrorResponse} from "../../../../node_modules/@angular/common/http";

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {
  public errorMsg: string;
  private _currentUser: User;

  constructor(private _auth: AuthenticationService) { }

  ngOnInit() {
    this._auth.currentUser.subscribe(
      item => (this._currentUser = item['user']),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
          } bij het ophalen van het user: ${error.error}`;
      }
    );
  }

  get currentUser(): User {
    return this._currentUser;
  }
}
