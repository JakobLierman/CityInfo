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

  constructor(private auth: AuthenticationService) {
  }

  get currentUser(): User {
    return this.auth.currentUser;
  }

  ngOnInit() {
  }
}
