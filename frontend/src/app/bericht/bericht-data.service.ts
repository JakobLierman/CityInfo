import { map } from 'rxjs/operators';
import { Bericht } from './bericht.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BerichtDataService {
  private readonly _appUrl = '/API/berichten/';
  private _berichten = new Array<Bericht>();

  constructor(private http: HttpClient) {}

  get berichten(): Observable<Bericht[]> {
    return this.http
      .get(this._appUrl)
      .pipe(
        map((list: any[]): Bericht[] =>
          list.map(
            item =>
              new Bericht(
                item.titel,
                item.bericht,
                item.categorie,
                item.dateAdded
              )
          )
        )
      );
  }

  berichtToevoegen(bericht) {
    this._berichten.push(bericht);
  }
}
