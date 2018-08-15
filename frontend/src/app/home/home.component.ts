import {Component, OnInit} from '@angular/core';
import {User} from "../user/user.model";
import {AuthenticationService} from "../user/authentication.service";
import {UserDataService} from "../user/user-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthenticationService, private userDataService: UserDataService) {
  }

  get currentUser(): User {
    return this.auth.currentUser;
  }

  ngOnInit() {
    this.userDataService.testServer();
  }
}
