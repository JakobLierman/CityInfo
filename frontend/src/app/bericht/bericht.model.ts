import { Observable } from 'rxjs/observable';
import { Reactie } from './reactie/reactie.model';

export class Bericht {
  private _id: number;
  private _titel: string;
  private _boodschap: string;
  private _categorie: string;
  private _user: string; // Should be user
  private _dateAdded: Date = new Date();
  private _reacties: Observable<Reactie>;

  constructor(titel: string, boodschap: string, categorie: string, user: string, dateAdded: Date = null) {
    this._titel = titel;
    this._boodschap = boodschap;
    this._categorie = categorie;
    this._user = user;
    this._dateAdded = dateAdded ? dateAdded : new Date();
  }

  get id(): number {
      return this._id;
  }

  get titel(): string {
    return this._titel;
  }

  get boodschap(): string {
    return this._boodschap;
  }

  get category(): string {
    return this._categorie;
  }

  get user(): string {
    return this._user;
  }

  get dateAdded(): Date {
    return this._dateAdded;
  }

  get reacties(): Observable<Reactie> {
    return this._reacties;
  }
}
