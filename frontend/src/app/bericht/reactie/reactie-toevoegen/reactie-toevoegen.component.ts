import {BerichtDataService} from './../../bericht-data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Bericht} from './../../bericht.model';
import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Reactie} from '../reactie.model';
import {AuthenticationService} from "../../../user/authentication.service";
import {User} from "../../../user/user.model";
import {ReactieLijstComponent} from "../reactie-lijst/reactie-lijst.component";

@Component({
  selector: 'app-reactie-toevoegen',
  templateUrl: './reactie-toevoegen.component.html',
  styleUrls: ['./reactie-toevoegen.component.css']
})
export class ReactieToevoegenComponent implements OnInit {
  private _bericht: Bericht;
  public errorMsg: string;
  reactie: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private berichtDataService: BerichtDataService,
    private auth: AuthenticationService,
    private reactieLijst: ReactieLijstComponent
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
    this.reactie = this.fb.group({
      boodschap: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const reactie = new Reactie(this.reactie.value.boodschap, this.currentUser);
    this.berichtDataService
      .voegReactieToeAanBericht(reactie, this._bericht)
      .subscribe((val) => {
          reactie.id = val.id;
          this.reactieLijst.reactieToevoegen(reactie);
          this.reactie.reset();
        },
        (error: HttpErrorResponse) => {
          this.errorMsg = `Error ${
            error.status
            } bij het toevoegen van reactie: ${error.error}`;
        }
      );
  }
}
