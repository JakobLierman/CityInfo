import { User } from './../../user/user.model';

export class Reactie {
  private _id: number;
  private _boodschap: string;
  private _user: User;
  private _dateAdded: Date = new Date();

  constructor(boodschap: string, user: User = null, dateAdded: Date = null) {
    this._boodschap = boodschap;
    this._user = user; // ? currentUser;
    this._dateAdded = dateAdded ? dateAdded : new Date();
  }

  static fromJSON(json: any): Reactie {
    const rec = new Reactie(
      json.boodschap,
      json.user,
      json.created
    );
    rec._id = json._id;
    return rec;
  }

  toJSON() {
    return {
      _id: this._id,
      boodschap: this._boodschap,
      user: this._user,
      created: this._dateAdded
    };
  }

  get id(): number {
      return this._id;
  }

  get boodschap(): string {
    return this._boodschap;
  }

  get user(): User {
    return this._user;
  }

  get dateAdded(): Date {
      return this._dateAdded;
  }
}
