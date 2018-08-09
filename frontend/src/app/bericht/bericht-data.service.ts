import { map } from 'rxjs/operators';
import { Bericht, Categorie } from './bericht.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BerichtDataService {
  private readonly _appUrl = '/API';

  constructor(private http: HttpClient) {}

  // Berichten
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

  // Categorieen
  get categorieen(): Observable<Categorie[]> {
    return this.http
      .get(`${this._appUrl}/categorieen/`)
      .pipe(map((list: any[]): Categorie[] => list.map(Categorie.fromJSON)));
  }

  categorieToevoegen(categorie: Categorie): Observable<Categorie> {
    return this.http
      .post(`${this._appUrl}/categorieen/`, categorie)
      .pipe(map(Categorie.fromJSON));
  }

  categorieVerwijderen(categorie: Categorie): Observable<Categorie> {
    return this.http
      .delete(`${this._appUrl}/categorie/${categorie.id}`)
      .pipe(map(Categorie.fromJSON));
  }
}
