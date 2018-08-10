import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BerichtDataService } from '../../bericht-data.service';
import { Bericht } from '../../bericht.model';
import { Reactie } from '../reactie.model';

@Component({
  selector: 'app-reactie-lijst',
  templateUrl: './reactie-lijst.component.html',
  styleUrls: ['./reactie-lijst.component.css']
})
export class ReactieLijstComponent implements OnInit {
  private _bericht: Bericht;
  private _reacties: Reactie[];
  public errorMsg: string;

  constructor(private _berichtDataService: BerichtDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      item => (this._bericht = item['bericht']),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} bij het ophalen van het bericht: ${error.error}`;
      }
    );
    this._berichtDataService.getReactiesVanBericht(this._bericht).subscribe(
      reacties => (this._reacties = reacties),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} bij het ophalen van reactie`;
      }
    );
  }

  get reacties(): Reactie[] {
    return this._reacties;
  }

  get bericht(): Bericht {
    return this._bericht;
  }

  verwijderReactie(reactie: Reactie) {
    this._berichtDataService.verwijderReactieVanBericht(reactie, this._bericht).subscribe(
      item => (this._reacties = this._reacties.filter(val => item.id !== val.id)),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error $error.status} bij het verwijderen van de reactie= ${error.error}`;
      }
    );
  }

}
