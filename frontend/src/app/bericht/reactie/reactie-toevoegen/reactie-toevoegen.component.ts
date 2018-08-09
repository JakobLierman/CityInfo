import { BerichtDataService } from './../../bericht-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Bericht } from './../../bericht.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reactie } from '../reactie.model';

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
    private _berichtDataService: BerichtDataService
  ) {}

  get bericht(): Bericht {
    return this._bericht;
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
    const reactie = new Reactie(this.reactie.value.boodschap);
    this._berichtDataService
      .voegReactieToeAanBericht(reactie, this._bericht)
      .subscribe(
        () => {
          this.reactie.reset();
          this._bericht.reactieToevoegen(reactie);
        },
        (error: HttpErrorResponse) => {
          this.errorMsg = `Error ${
            error.status
          } bij het toevoegen van reactie: ${error.error}`;
        }
      );
  }
}
