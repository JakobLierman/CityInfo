import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {map} from "rxjs/operators";
import {User} from "./user.model";
import {UserDataService} from "./user-data.service";

function parseJwt(token) {
  if (!token) {
    return null;
  }
  const base64Token = token.split(".")[1];
  const base64 = base64Token.replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(window.atob(base64));
}

@Injectable()
export class AuthenticationService {
  private readonly _tokenKey = "currentUser";
  private readonly _url = "/API/users";
  private _user$: BehaviorSubject<string>;
  public redirectUrl: string;

  constructor(
    private userDataService: UserDataService,
    private http: HttpClient
  ) {
    let parsedToken = parseJwt(localStorage.getItem(this._tokenKey));
    if (parsedToken) {
      const expires =
        new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
      if (expires) {
        localStorage.removeItem(this._tokenKey);
        parsedToken = null;
      }
    }
    this._user$ = new BehaviorSubject<string>(
      parsedToken && parsedToken.username
    );
  }

  get currentUser(): User {
    if (!this.token) {
      return null;
    }
    const fromLocalStorage = parseJwt(localStorage.getItem(this._tokenKey));
    const user = new User(
      fromLocalStorage.username,
      fromLocalStorage.voornaam,
      fromLocalStorage.familienaam,
      fromLocalStorage.email,
      fromLocalStorage.regio
    );
    user.id = fromLocalStorage._id;
    return user;
  }

  get user$(): BehaviorSubject<string> {
    return this._user$;
  }

  get token(): string {
    const localToken = localStorage.getItem(this._tokenKey);
    return !!localToken ? localToken : "";
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this._url}/login`, {username, password}).pipe(
      map((res: any) => {
        const token = res.token;
        if (token) {
          localStorage.setItem(this._tokenKey, token);
          this._user$.next(username);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem(this._tokenKey);
      setTimeout(() => this._user$.next(null));
    }
  }

  register(username: string, password: string, voornaam: string, familienaam: string, email: string, regio: string): Observable<boolean> {
    return this.http
      .post(`${this._url}/register`, {
        username,
        password,
        voornaam,
        familienaam,
        email,
        regio
      })
      .pipe(
        map((res: any) => {
          const token = res.token;
          if (token) {
            localStorage.setItem(this._tokenKey, token);
            this._user$.next(username);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  checkUserNameAvailability(username: string): Observable<boolean> {
    return this.http.post(`${this._url}/checkusername`, {username}).pipe(
      map((item: any) => {
        return item.username !== "alreadyexists";
      })
    );
  }
}
