import { BerichtDataService } from './../bericht-data.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-bericht-lijst',
  templateUrl: './bericht-lijst.component.html',
  styleUrls: ['./bericht-lijst.component.css']
})
export class BerichtLijstComponent implements OnInit {
  public filterBerichtNaam: string;
  public filterBericht$ = new Subject<string>();

  private _berichten;

  constructor(private _berichtDataService: BerichtDataService) {
    this.filterBericht$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => (this.filterBerichtNaam = val));
  }

  ngOnInit() {
    this._berichten = this._berichtDataService.berichten;
  }

  get berichten() {
    return this._berichten;
  }
}
