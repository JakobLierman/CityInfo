export class Regio {
  private _id: string;
  private _naam: string;

  constructor(naam: string) {
    this._naam = naam;
  }

  static fromJSON(json: any): Regio {
    const rec = new Regio(json.naam);
    rec._id = json._id;
    return rec;
  }

  get id(): string {
    return this._id;
  }

  get naam(): string {
    return this._naam;
  }
}

export class User {
  private _id: string;
  private _username: string;
  private _voornaam: string;
  private _familienaam: string;
  private _email: string;
  private _regio: string;

  constructor(username: string, voornaam: string, familienaam: string, email: string, regio: string) {
    this._username = username;
    this._voornaam = voornaam;
    this._familienaam = familienaam;
    this._email = email;
    this._regio = regio;
  }

  static fromJSON(json: any): User {
    const rec = new User(
      json.username,
      json.voornaam,
      json.familienaam,
      json.email,
      json.regio
    );
    rec._id = json._id;
    return rec;
  }

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
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

  set voornaam(voornaam: string) {
    this._voornaam = voornaam;
  }

  get familienaam(): string {
    return this._familienaam;
  }

  set familienaam(familienaam: string) {
    this._familienaam = familienaam;
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

  get regio(): string {
    return this._regio;
  }

  set regio(regio: string) {
    this._regio = regio;
  }
}
