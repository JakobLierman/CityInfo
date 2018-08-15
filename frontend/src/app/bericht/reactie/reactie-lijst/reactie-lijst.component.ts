import {ActivatedRoute} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {BerichtDataService} from '../../bericht-data.service';
import {Bericht} from '../../bericht.model';
import {Reactie} from '../reactie.model';

@Component({
  selector: 'app-reactie-lijst',
  templateUrl: './reactie-lijst.component.html',
  styleUrls: ['./reactie-lijst.component.css']
})
export class ReactieLijstComponent implements OnInit {
  private _bericht: Bericht;
  public errorMsg: string;

  constructor(private _berichtDataService: BerichtDataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(
      item => (this._bericht = item['bericht']),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} bij het ophalen van het bericht: ${error.error}`;
      }
    );
  }

  get reacties(): Reactie[] {
    return this._bericht.reacties;
  }

  get bericht(): Bericht {
    return this._bericht;
  }

  reactieToevoegen(reactie: Reactie) {
    this._bericht.reacties.push(reactie);
  }

  reactieVerwijderen(reactie: Reactie) {
    this._bericht.reacties.splice(this._bericht.reacties.indexOf(reactie), 1);
  }

}
