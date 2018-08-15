import {Observable} from 'rxjs/observable';
import {AuthenticationService} from '../authentication.service';
import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Regio} from "../user.model";
import {HttpErrorResponse} from "@angular/common/http";
import {UserDataService} from "../user-data.service";

function passwordValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    return control.value.length < length ? {
      'passwordTooShort': {
        requiredLength: length, actualLength: control.value.length
      }
    } : null;
  };
}

function comparePasswords(control: AbstractControl): { [key: string]: any } {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value ? null : {'passwordsDiffer': true};
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: FormGroup;
  public errorMsg: string;
  private _regios: Regio[];

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder,
    private _userDataService: UserDataService
  ) {
  }

  get passwordControl(): FormControl {
    return <FormControl>this.user.get('passwordGroup').get('password');
  }

  ngOnInit() {
    this._userDataService.regios.subscribe(
      regios => (this._regios = regios),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} bij het ophalen van de regio's: ${error.error}`;
      }
    );
    this.user = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)], this.serverSideValidateUsername()],
      voornaam: ['', Validators.required],
      familienaam: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      regio: ['', Validators.required],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, passwordValidator(8)]],
        confirmPassword: ['', Validators.required]
      }, {validator: comparePasswords})
    });
  }

  get regios() {
    const regioArray: string[] = [];
    if (this._regios) {
      this._regios.forEach(r => regioArray.push(r.naam));
    }
    return regioArray;
  }

  serverSideValidateUsername(): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any }> => {
      return this.authenticationService.checkUserNameAvailability(control.value).pipe(
        map(available => {
          if (available) {
            return null;
          }
          return {userAlreadyExists: true};
        })
      );
    };
  }

  onSubmit() {
    this.authenticationService
      .register(
        this.user.value.username,
        this.passwordControl.value,
        this.user.value.voornaam,
        this.user.value.familienaam,
        this.user.value.email,
        this.user.value.regio
      )
      .subscribe(
        val => {
          if (val) {
            this.router.navigate(['/bericht/lijst']);
          }
        },
        (error: HttpErrorResponse) => {
          this.errorMsg = `Error ${
            error.status
            } while trying to register user ${this.user.value.username}: ${
            error.error
            }`;
        }
      );
  }
}
