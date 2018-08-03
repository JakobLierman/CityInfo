import { BerichtDataService } from '../bericht-data.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpErrorResponse } from '@angular/common/http';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { Bericht } from '../bericht.model';

@Component({
  selector: 'app-bericht-lijst',
  templateUrl: './bericht-lijst.component.html',
  styleUrls: ['./bericht-lijst.component.css']
})
export class BerichtLijstComponent implements OnInit {
  public filterBerichtNaam: string;
  public filterBericht$ = new Subject<string>();

  public errorMsg: string;

  private _berichten: Bericht[];

  constructor(private _berichtDataService: BerichtDataService) {
    this.filterBericht$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => (this.filterBerichtNaam = val));
  }

  ngOnInit(): void {
    this._berichtDataService.berichten.subscribe(
      berichten => (this._berichten = berichten),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
        } while trying to retrieve recipes: ${error.error}`;
      }
    );
  }

  get berichten() {
    return this._berichten;
  }

  verwijderBericht(bericht: Bericht) {
    this._berichtDataService.verwijderBericht(bericht).subscribe(
      item => (this._berichten = this._berichten.filter(val => item.id !== val.id)),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while removing Berichten for ${
          bericht.titel
        }: ${error.error}`;
      }
    );
  }
}
