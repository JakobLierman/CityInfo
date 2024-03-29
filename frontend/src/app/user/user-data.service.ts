import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Regio, User} from "./user.model";
import {map} from "rxjs/operators";

@Injectable()
export class UserDataService {
  private readonly _appUrl = "/API";

  constructor(private http: HttpClient) {
  }

  testServer() {
    this.http.get(`${this._appUrl}/`, {responseType: 'text'})
      .subscribe(res => console.log(res));
  }

  // Users
  get users(): Observable<User[]> {
    return this.http
      .get(`${this._appUrl}/users/`)
      .pipe(map((list: any[]): User[] => list.map(User.fromJSON)));
  }

  getUserById(id: string): Observable<User> {
    return this.http
      .get(`${this._appUrl}/users/id/${id}`)
      .pipe(map(User.fromJSON));
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http
      .get(`${this._appUrl}/users/${username}`)
      .pipe(map(User.fromJSON));
  }

  // Regio's
  get regios(): Observable<Regio[]> {
    return this.http
      .get(`${this._appUrl}/regios/`)
      .pipe(map((list: any[]): Regio[] => list.map(Regio.fromJSON)));
  }

  getRegioById(id: string): Observable<Regio> {
    return this.http
      .get(`${this._appUrl}/regio/${id}`)
      .pipe(map(Regio.fromJSON));
  }

  regioToevoegen(regio: Regio): Observable<Regio> {
    return this.http
      .post(`${this._appUrl}/regios/`, regio)
      .pipe(map(Regio.fromJSON));
  }

  regioVerwijderen(regio: Regio): Observable<Regio> {
    return this.http
      .delete(`${this._appUrl}/regio/${regio.id}`)
      .pipe(map(Regio.fromJSON));
  }
}
