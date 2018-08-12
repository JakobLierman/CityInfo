import { basehttpInterceptorProviders } from "./../http-interceptors/index";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { AuthenticationService } from "./authentication.service";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { LogoutComponent } from "./logout/logout.component";
import { UserDataService } from "./user-data.service";
import { AuthGuardService } from "./auth-guard.service";

const routes = [
  { path: "aanmelden", component: LoginComponent },
  { path: "afmelden", component: LogoutComponent },
  { path: "registreer", component: RegisterComponent }
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
    RegisterComponent,
    LogoutComponent],
  providers: [
    basehttpInterceptorProviders,
    AuthenticationService,
    AuthGuardService,
    UserDataService
  ],
  exports: []
})
export class UserModule {}
