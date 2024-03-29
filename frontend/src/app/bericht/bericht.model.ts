import {User} from './../user/user.model';
import {Reactie} from './reactie/reactie.model';

export class Categorie {
  private _id: number;
  private _naam: string;
  private _graad: number;

  constructor(naam: string, graad: number = null) {
    this._naam = naam;
    this._graad = graad;
  }

  static fromJSON(json: any): Categorie {
    const categorie = new Categorie(json.naam, json.graad);
    categorie._id = json._id;
    return categorie;
  }

  get id(): number {
    return this._id;
  }

  get naam(): string {
    return this._naam;
  }

  get graad(): number {
    return this._graad;
  }
}

export class Bericht {
  private _id: string;
  private _titel: string;
  private _boodschap: string;
  private _categorie: Categorie;
  private _user: User;
  private _dateAdded: Date;
  private _reacties: Reactie[];

  constructor(
    titel: string,
    boodschap: string,
    categorie: Categorie,
    user: User,
    dateAdded: Date = null
  ) {
    this._titel = titel;
    this._boodschap = boodschap;
    this._categorie = categorie;
    this._user = user;
    this._dateAdded = dateAdded ? dateAdded : new Date();
  }

  static fromJSON(json: any): Bericht {
    const bericht = new Bericht(
      json.titel,
      json.boodschap,
      json.categorie,
      json.user,
      json.created
    );
    bericht._id = json._id;
    bericht._reacties = json.reacties.map(Reactie.fromJSON);
    return bericht;
  }

  toJSON() {
    return {
      _id: this._id,
      titel: this._titel,
      boodschap: this._boodschap,
      categorie: this._categorie,
      user: this._user,
      created: this._dateAdded
    };
  }

  get id(): string {
    return this._id;
  }

  get titel(): string {
    return this._titel;
  }

  get boodschap(): string {
    return this._boodschap;
  }

  get categorie(): Categorie {
    return this._categorie;
  }

  get user(): User {
    return this._user;
  }

  get dateAdded(): Date {
    return this._dateAdded;
  }

  get reacties(): Reactie[] {
    return this._reacties;
  }

  isNieuw(): boolean {
    const t = new Date().getTime() - (24 * 60 * 60 * 1000);
    return new Date(this._dateAdded).getTime() > t;
  }
}
