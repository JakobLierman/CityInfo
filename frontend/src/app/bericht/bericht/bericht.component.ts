import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Bericht} from '../bericht.model';
import {User} from "../../user/user.model";
import {AuthenticationService} from "../../user/authentication.service";

@Component({
  selector: 'app-bericht',
  templateUrl: './bericht.component.html',
  styleUrls: ['./bericht.component.css']
})
export class BerichtComponent implements OnInit {
  @Input() public bericht: Bericht;
  @Output() public deleteBericht = new EventEmitter<Bericht>();
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

  isMine() {
    return this.bericht.user.username === this._currentUser.username;
  }

  verwijderBericht() {
    this.deleteBericht.emit(this.bericht);
  }
}
