import { Bericht } from '../bericht.model';

export class Reactie {
  private _id: number;
  private _bericht: Bericht;
  private _boodschap: string;
  private _user: string; // Should be user
  private _dateAdded: Date = new Date();

  constructor(bericht: Bericht, boodschap: string, user: string, dateAdded: Date = null) {
    this._bericht = bericht;
    this._boodschap = boodschap;
    this._user = user;
    this._dateAdded = dateAdded ? dateAdded : new Date();
  }

  get id(): number {
      return this._id;
  }

  get bericht(): Bericht {
    return this._bericht;
  }

  get boodschap(): string {
    return this._boodschap;
  }

  get user(): string {
    return this._user;
  }

  get dateAdded(): Date {
      return this._dateAdded;
  }
}
