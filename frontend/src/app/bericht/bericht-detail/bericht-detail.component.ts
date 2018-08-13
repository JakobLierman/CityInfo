import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Bericht} from '../bericht.model';
import {User} from "../../user/user.model";
import {AuthenticationService} from "../../user/authentication.service";

@Component({
  selector: 'app-bericht-detail',
  templateUrl: './bericht-detail.component.html',
  styleUrls: ['./bericht-detail.component.css']
})
export class BerichtDetailComponent implements OnInit {
  private _bericht: Bericht;
  public errorMsg: string;
  private _currentUser: User;

  constructor(private route: ActivatedRoute, private auth: AuthenticationService) {
  }

  get bericht(): Bericht {
    return this._bericht;
  }

  get currentUser(): User {
    return this._currentUser;
  }

  ngOnInit() {
    this.route.data.subscribe(
      item => (this._bericht = item['bericht']),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
          } bij het ophalen van het bericht: ${error.error}`;
      }
    );
    if (this.auth.token) {
      this.auth.currentUser$.subscribe(
        (user: User) => (this._currentUser = user)
      );
    }
  }

  isMine() {
    return this.bericht.user.username === this._currentUser.username;
  }
}
