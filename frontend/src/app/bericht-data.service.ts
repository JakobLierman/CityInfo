import { Bericht } from './bericht/bericht.model';
import { Injectable } from '@angular/core';

@Injectable()
export class BerichtDataService {
  private _berichten = new Array<Bericht>();

  constructor() {}

  get berichten(): Bericht[] {
    return this._berichten;
  }

  berichtToevoegen(bericht) {
    this._berichten.push(bericht);
  }
}
