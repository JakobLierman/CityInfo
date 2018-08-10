import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Regio} from "./user.model";
import {map} from "rxjs/operators";

@Injectable()
export class UserDataService {
  private readonly _appUrl = '/API';

  constructor(private http: HttpClient) {
  }

  // Regio's
  get regios(): Observable<Regio[]> {
    return this.http
      .get(`${this._appUrl}/regios/`)
      .pipe(map((list: any[]): Regio[] => list.map(Regio.fromJSON)));
  }

  regioToevoegen(regio: Regio): Observable<Regio> {
    return this.http
      .post(`${this._appUrl}/regios/`, regio)
      .pipe(map(Regio.fromJSON));
  }

  regioVerwijderen(regio: Regio): Observable<Regio> {
    return this.http
      .delete(`${this._appUrl}/regio/${regio.id}`)
      .pipe(map(Regio.fromJSON));
  }
}
