import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bericht } from '../bericht.model';

@Component({
  selector: 'app-bericht-detail',
  templateUrl: './bericht-detail.component.html',
  styleUrls: ['./bericht-detail.component.css']
})
export class BerichtDetailComponent implements OnInit {
  private _bericht: Bericht;
  public errorMsg: string;

  constructor(private route: ActivatedRoute) {}

  get bericht(): Bericht {
    return this._bericht;
  }

  ngOnInit() {
    this.route.data.subscribe(
      item => (this._bericht = item['bericht']),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
        } bij het ophalen van het bericht: ${error.error}`;
      }
     );
  }
}
