export class Bericht {
  private _id: number;
  private _titel: string;
  private _bericht: string;
  private _dateAdded: Date = new Date();
  private _categorie: string;

  constructor(titel: string, bericht: string, categorie: string, dateAdded: Date = null) {
    this._titel = titel;
    this._bericht = bericht;
    this._categorie = categorie;
    this._dateAdded = dateAdded ? dateAdded : new Date();
  }

  get id(): number {
      return this._id;
  }

  get titel(): string {
    return this._titel;
  }

  get bericht(): string {
    return this._bericht;
  }

  get category(): string {
    return this._categorie;
  }

  get dateAdded(): Date {
      return this._dateAdded;
  }
}
