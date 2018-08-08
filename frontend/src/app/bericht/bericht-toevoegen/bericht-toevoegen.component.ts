import { HttpErrorResponse } from '@angular/common/http';
import { BerichtDataService } from './../bericht-data.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Bericht, Categorie } from '../bericht.model';

@Component({
  selector: 'app-bericht-toevoegen',
  templateUrl: './bericht-toevoegen.component.html',
  styleUrls: ['./bericht-toevoegen.component.css']
})
export class BerichtToevoegenComponent implements OnInit {
  bericht: FormGroup;
  errorMsg: string;

  private _categorieen: Categorie[];

  constructor(
    private fb: FormBuilder,
    private _berichtDataServive: BerichtDataService
  ) {}

  ngOnInit() {
    this._berichtDataServive.categorieen.subscribe(
      categorieen => (this._categorieen = categorieen),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while trying to recieve Categorieen: ${error.error}`;
      }
    );
    this.bericht = this.fb.group({
      titel: ['', [Validators.required, Validators.minLength(2)]],
      boodschap: ['', [Validators.required, Validators.minLength(25)]],
      categorie: ['', [Validators.required]]
    });
  }

  get categorieen() {
    return this._categorieen;
  }

  onSubmit() {
    const bericht = new Bericht(
      this.bericht.value.titel,
      this.bericht.value.boodschap,
      this.bericht.value.categorie
    );

    this._berichtDataServive.berichtToevoegen(bericht).subscribe(
      () => {
        this.bericht.reset();
      },
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while adding Bericht for ${
          bericht.titel
        }: ${error.error}`;
      }
    );
  }
}
