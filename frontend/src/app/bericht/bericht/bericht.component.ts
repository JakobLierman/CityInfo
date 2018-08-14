import {Component, Input, OnInit} from '@angular/core';
import {Bericht} from '../bericht.model';
import {User} from "../../user/user.model";
import {AuthenticationService} from "../../user/authentication.service";
import {BerichtDataService} from "../bericht-data.service";
import {HttpErrorResponse} from "../../../../node_modules/@angular/common/http";
import {BerichtLijstComponent} from "../bericht-lijst/bericht-lijst.component";

@Component({
  selector: 'app-bericht',
  templateUrl: './bericht.component.html',
  styleUrls: ['./bericht.component.css']
})
export class BerichtComponent implements OnInit {
  @Input() public bericht: Bericht;

  constructor(
    private auth: AuthenticationService,
    private berichtDataService: BerichtDataService,
    private berichtLijst: BerichtLijstComponent
  ) {
  }

  get currentUser(): User {
    return this.auth.currentUser;
  }

  ngOnInit() {
  }

  isMine() {
    return this.bericht.user.username === this.currentUser.username;
  }

  verwijderBericht() {
    if (this.isMine()) {
      this.berichtDataService
        .verwijderBericht(this.bericht)
        .subscribe(() => {
            this.berichtLijst.berichtVerwijderen(this.bericht);
          },
          (error: HttpErrorResponse) => {
            this.berichtLijst.errorMsg =
              `Error ${error.status} bij het verwijderen van bericht met titel "${this.bericht.titel}": ${error.error}`;
          });
    }
  }
}
