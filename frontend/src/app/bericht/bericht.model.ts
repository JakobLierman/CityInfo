import { Reactie } from './reactie/reactie.model';

export class Categorie {
  private _id: number;
  private _naam: string;
  private _graad: number;
  
  constructor(naam: string, graad: number = null) {
    this._naam = naam;
    this._graad = graad;
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
  private _id: number;
  private _titel: string;
  private _boodschap: string;
  private _categorie: Categorie;
  private _user: string; // Should be user
  private _dateAdded: Date = new Date();
  private _reacties: [Reactie];

  constructor(titel: string, boodschap: string, categorie: Categorie, user: string, dateAdded: Date = null) {
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

 /*  get regio(): string { // Should be regio ???
    return REGIO_VAN_USER;
  } */

  get category(): Categorie {
    return this._categorie;
  }

  get user(): string { // Should be user
    return this._user;
  }

  get dateAdded(): Date {
    return this._dateAdded;
  }

  get reacties(): [Reactie] {
    return this._reacties;
  }
}
