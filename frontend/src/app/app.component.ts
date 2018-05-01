import { Component } from '@angular/core';
import { Bericht } from './bericht/bericht.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CityInfo';

  private _berichten = new Array<Bericht>();

  constructor() {
    const bericht1 = new Bericht('Titel 1', 'Berichtinhoud 1');
    const bericht2 = new Bericht('Titel 2', 'Berichtinhoud 2');
    const bericht3 = new Bericht('Titel 3', 'Berichtinhoud 3');

    this._berichten.push(bericht1);
    this._berichten.push(bericht2);
    this._berichten.push(bericht3);
  }

  get berichten() {
    return this._berichten;
  }
}
