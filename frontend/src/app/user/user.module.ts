import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes = [
  { path: 'aanmelden', component: LoginComponent },
  // { path: 'afmelden', component: LogoutComponent },
  { path: 'registreer', component: RegisterComponent }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class UserModule { }
