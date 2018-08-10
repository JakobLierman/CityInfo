export class Regio {
  private _id: number;
  private _naam: string;

  constructor(naam: string) {
    this._naam = naam;
  }

  static fromJSON(json: any): Regio {
    const rec = new Regio(json.naam);
    rec._id = json._id;
    return rec;
  }

  get id(): number {
    return this._id;
  }

  get naam(): string {
    return this._naam;
  }
}

export class User {
  private _id: number;
  private _username: string;
  private _voornaam: string;
  private _familienaam: string;
  private _email: string;
  private _regio: Regio;

  constructor(username: string, voornaam: string, familienaam: string, email: string, regio: Regio) {
    this._username = username;
    this._voornaam = voornaam;
    this._familienaam = familienaam;
    this._email = email;
    this._regio = regio;
  }

  get id(): number {
    return this._id;
  }

  get username(): string {
    return this._username;
  }

  set username(username: string) {
    this._username = username;
  }

  get voornaam(): string {
    return this._voornaam;
  }

  get familienaam(): string {
    return this._familienaam;
  }

  get naam(): string {
    return this._voornaam + ' ' + this._familienaam;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get regio(): Regio {
    return this._regio;
  }

  set regio(regio: Regio) {
    this._regio = regio;
  }
}
