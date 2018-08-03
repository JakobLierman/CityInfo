import { map } from 'rxjs/operators';
import { Bericht } from './bericht.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BerichtDataService {
  private readonly _appUrl = '/API';

  constructor(private http: HttpClient) {}

  get berichten(): Observable<Bericht[]> {
    return this.http
      .get(`${this._appUrl}/berichten/`)
      .pipe(map((list: any[]): Bericht[] => list.map(Bericht.fromJSON)));
  }

  berichtToevoegen(bericht: Bericht): Observable<Bericht> {
    return this.http
    .post(`${this._appUrl}/berichten/`, bericht)
    .pipe(map(Bericht.fromJSON));
  }

  verwijderBericht(bericht: Bericht): Observable<Bericht> {
    return this.http
    .delete(`${this._appUrl}/bericht/${bericht.id}`)
    .pipe(map(Bericht.fromJSON));
  }

  getBerichtById(id: string): Observable<Bericht> {
    return this.http
      .get(`${this._appUrl}/bericht/${id}`)
      .pipe(map(Bericht.fromJSON));
  }
}
