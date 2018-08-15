import {BerichtDataService} from '../bericht-data.service';
import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpErrorResponse} from '@angular/common/http';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {Bericht} from '../bericht.model';
import {AuthenticationService} from "../../user/authentication.service";

@Component({
  selector: 'app-bericht-lijst',
  templateUrl: './bericht-lijst.component.html',
  styleUrls: ['./bericht-lijst.component.css']
})
export class BerichtLijstComponent implements OnInit {
  public filterBerichtTitel: string;
  public filterBericht$ = new Subject<string>();
  public errorMsg: string;
  private _berichten: Bericht[];
  public successMsg: string;
  private currentPage = 1;

  constructor(
    private berichtDataService: BerichtDataService,
    private auth: AuthenticationService
  ) {
    this.filterBericht$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => (this.filterBerichtTitel = val));
  }

  ngOnInit(): void {
    this.berichtDataService.berichten.subscribe(
      berichten => (this._berichten = berichten.filter(ber => ber.user.regio === this.currentUser.regio)),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
          } bij het ophalen van de berichten: ${error.error}`;
      }
    );
  }

  get berichten() {
    return this._berichten;
  }

  get currentUser() {
    return this.auth.currentUser;
  }

  onPageChange(page: number) {
    this.currentPage = page;
    window.scrollTo(0, 0);
  }

  berichtVerwijderen(bericht: Bericht) {
    this._berichten.splice(this._berichten.indexOf(bericht), 1);
    window.scrollTo(0, 0);
  }
}
