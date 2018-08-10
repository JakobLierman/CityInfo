import { User } from './../user/user.model';
import { Reactie } from './reactie/reactie.model';

export class Categorie {
  private _id: number;
  private _naam: string;
  private _graad: number;

  constructor(naam: string, graad: number = null) {
    this._naam = naam;
    this._graad = graad;
  }

  static fromJSON(json: any): Categorie {
    const rec = new Categorie(json.naam, json.graad);
    rec._id = json._id;
    return rec;
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
  private _dateAdded: Date = new Date();
  private _reacties: Reactie[];

  constructor(
    titel: string,
    boodschap: string,
    categorie: Categorie,
    dateAdded: Date = null
  ) {
    this._titel = titel;
    this._boodschap = boodschap;
    this._categorie = categorie;
    this._dateAdded = dateAdded ? dateAdded : new Date();
  }

  static fromJSON(json: any): Bericht {
    const rec = new Bericht(
      json.titel,
      json.boodschap,
      json.categorie,
      json.created
    );
    rec._id = json._id;
    rec._user = json.user;
    rec._reacties = json.reacties.map(Reactie.fromJSON);
    return rec;
  }

  toJSON() {
    return {
      _id: this._id,
      titel: this._titel,
      boodschap: this._boodschap,
      categorie: this._categorie,
      user: this._user, // currentUser?
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
    return this._dateAdded.getDate() === new Date().getDate();
  }

  reactieToevoegen(reactie: Reactie) {
    this._reacties.push(reactie);
  }

  reactieVerwijderen(reactie: Reactie) {
    const index = this._reacties.indexOf(reactie);
    this._reacties.splice(index, 1);
  }
}
