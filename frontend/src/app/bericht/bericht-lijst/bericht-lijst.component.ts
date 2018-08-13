import {BerichtDataService} from '../bericht-data.service';
import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpErrorResponse} from '@angular/common/http';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {Bericht} from '../bericht.model';

@Component({
  selector: 'app-bericht-lijst',
  templateUrl: './bericht-lijst.component.html',
  styleUrls: ['./bericht-lijst.component.css']
})
export class BerichtLijstComponent implements OnInit {
  public filterBerichtTitel: string;
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
      .subscribe(val => (this.filterBerichtTitel = val));
  }

  ngOnInit(): void {
    this.berichtDataService.berichten.subscribe(
      berichten => (this._berichten = berichten),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
          } bij het ophalen van de berichten: ${error.error}`;
      }
    );
  }

  get berichten() {
    return this._berichten;
  }

  verwijderBericht(bericht: Bericht) {
    this.berichtDataService.verwijderBericht(bericht).subscribe(
      item => (this._berichten = this._berichten.filter(val => item.id !== val.id)),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} bij het verwijderen van bericht met titel "${bericht.titel}": ${error.error}`;
      }
    );
  }
}
