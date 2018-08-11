import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Bericht, Categorie} from '../bericht.model';
import {BerichtDataService} from './../bericht-data.service';
import {Router} from "@angular/router";


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
    private _berichtDataService: BerichtDataService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this._berichtDataService.categorieen.subscribe(
      categorieen => (this._categorieen = categorieen),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
          } bij het ophalen van de categorieën: ${error.error}`;
      }
    );
    this.bericht = this.fb.group({
      titel: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
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

    this._berichtDataService.berichtToevoegen(bericht).subscribe(
      () => {
        this.router.navigate(['bericht/lijst']);
      },
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} bij het toevoegen van bericht met titel "${
          bericht.titel
          }": ${error.error}`;
      }
    );
  }
}
