import { Component } from '@angular/core';
import { Bericht } from './bericht/bericht.model';
import { BerichtDataService } from './bericht/bericht-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CityInfo';

  constructor() {}
}
