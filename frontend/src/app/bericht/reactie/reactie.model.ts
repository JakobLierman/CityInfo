import {User} from '../../user/user.model';

export class Reactie {
  private _id: string;
  private _boodschap: string;
  private _user: User;
  private _dateAdded: Date;

  constructor(boodschap: string, user: User, dateAdded: Date = null) {
    this._boodschap = boodschap;
    this._user = user;
    this._dateAdded = dateAdded ? dateAdded : new Date();
  }

  static fromJSON(json: any): Reactie {
    const reactie = new Reactie(
      json.boodschap,
      json.user,
      json.created
    );
    reactie._id = json._id;
    return reactie;
  }

  toJSON() {
    return {
      _id: this._id,
      boodschap: this._boodschap,
      user: this._user,
      created: this._dateAdded
    };
  }

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
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
