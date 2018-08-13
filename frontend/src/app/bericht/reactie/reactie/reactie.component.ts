import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reactie} from '../reactie.model';
import {User} from "../../../user/user.model";
import {AuthenticationService} from "../../../user/authentication.service";

@Component({
  selector: 'app-reactie',
  templateUrl: './reactie.component.html',
  styleUrls: ['./reactie.component.css']
})
export class ReactieComponent implements OnInit {
  @Input() public reactie: Reactie;
  @Output() public deleteReactie = new EventEmitter<Reactie>();
  private _currentUser: User;

  constructor(private auth: AuthenticationService) {
  }

  ngOnInit() {
    if (this.auth.token) {
      this.auth.currentUser$.subscribe(
        (user: User) => (this._currentUser = user)
      );
    }
  }

  get currentUser(): User {
    return this._currentUser;
  }

  isMine() {
    return this.reactie.user.username === this._currentUser.username;
  }

  verwijderReactie() {
    this.deleteReactie.emit(this.reactie);
  }
}
