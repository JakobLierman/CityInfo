import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Bericht} from '../bericht.model';
import {User} from "../../user/user.model";
import {AuthenticationService} from "../../user/authentication.service";
import {BerichtDataService} from "../bericht-data.service";

@Component({
  selector: 'app-bericht-detail',
  templateUrl: './bericht-detail.component.html',
  styleUrls: ['./bericht-detail.component.css']
})
export class BerichtDetailComponent implements OnInit {
  private _bericht: Bericht;
  public errorMsg: string;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthenticationService,
    private berichtDataService: BerichtDataService,
    private router: Router
  ) {
  }

  get bericht(): Bericht {
    return this._bericht;
  }

  get currentUser(): User {
    return this.auth.currentUser;
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
  }

  isMine() {
    return this.bericht.user.username === this.currentUser.username;
  }

  verwijderBericht() {
    if (this.isMine()) {
      this.berichtDataService
        .verwijderBericht(this.bericht)
        .subscribe(() => {
          this.router.navigate(['bericht/lijst']);
          // this.berichtLijst.successMsg = "Het bericht werd succesvol verwijderd.";
        }, (error: HttpErrorResponse) => {
          this.errorMsg = `Error ${error.status} bij het verwijderen van bericht met titel '${this.bericht.titel}': ${error.error}`;
        });
    }
  }
}
