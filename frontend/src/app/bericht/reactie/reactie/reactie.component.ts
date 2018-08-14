import {Component, Input, OnInit} from '@angular/core';
import {Reactie} from '../reactie.model';
import {User} from "../../../user/user.model";
import {AuthenticationService} from "../../../user/authentication.service";
import {BerichtDataService} from "../../bericht-data.service";
import {ActivatedRoute} from "@angular/router";
import {Bericht} from "../../bericht.model";
import {HttpErrorResponse} from "@angular/common/http";
import {ReactieLijstComponent} from "../reactie-lijst/reactie-lijst.component";

@Component({
  selector: 'app-reactie',
  templateUrl: './reactie.component.html',
  styleUrls: ['./reactie.component.css']
})
export class ReactieComponent implements OnInit {
  @Input() public reactie: Reactie;
  private _bericht: Bericht;
  errorMsg: string;

  constructor(
    private auth: AuthenticationService,
    private berichtDataService: BerichtDataService,
    private route: ActivatedRoute,
    private reactieLijst: ReactieLijstComponent
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe(
      item => (this._bericht = item['bericht']),
      (error: HttpErrorResponse) => {
        this.reactieLijst.errorMsg = `Error ${
          error.status
          } bij het ophalen van het bericht: ${error.error}`;
      }
    );
  }

  get currentUser(): User {
    return this.auth.currentUser;
  }

  isMine() {
    return this.reactie.user.username === this.currentUser.username;
  }

  verwijderReactie() {
    if (this.isMine()) {
      this.berichtDataService
        .verwijderReactieVanBericht(this.reactie, this._bericht)
        .subscribe(() => {
          this.reactieLijst.reactieVerwijderen(this.reactie);
        }, (error: HttpErrorResponse) => {
          this.reactieLijst.errorMsg =
            `Error ${error.status} bij het verwijderen van reactie: ${error.error}`;
        });
    }
  }
}
