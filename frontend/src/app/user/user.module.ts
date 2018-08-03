import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { LogoutComponent } from './logout/logout.component';

const routes = [
  { path: 'aanmelden', component: LoginComponent },
  // { path: 'afmelden', component: LogoutComponent },
  { path: 'registreer', component: RegisterComponent }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent,
    // LogoutComponent,
    RegisterComponent],
  providers: [
    AuthenticationService
  ],
  exports: [
  ]
})
export class UserModule { }
