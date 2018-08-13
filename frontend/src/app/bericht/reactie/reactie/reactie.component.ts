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

  constructor(private auth: AuthenticationService) {
  }

  ngOnInit() {
  }

  get currentUser(): User {
    return this.auth.currentUser;
  }

  isMine() {
    return this.reactie.user.username === this.currentUser.username;
  }

  verwijderReactie() {
    this.deleteReactie.emit(this.reactie);
  }
}
