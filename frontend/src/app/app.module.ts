import {registerLocaleData} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import localeNl from "@angular/common/locales/nl";
import {LOCALE_ID, NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {SharedModule} from "./shared/shared.module";
import {PaginaNietGevondenComponent} from "./pagina-niet-gevonden/pagina-niet-gevonden.component";
import {UserModule} from "./user/user.module";
import {basehttpInterceptorProviders, httpInterceptorProviders} from "./http-interceptors";
import {NgxPaginationModule} from "ngx-pagination";

registerLocaleData(localeNl, "nl-BE");

@NgModule({
  declarations: [AppComponent, HomeComponent, PaginaNietGevondenComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    UserModule,
    SharedModule,
    NgxPaginationModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    basehttpInterceptorProviders,
    httpInterceptorProviders,
    {provide: LOCALE_ID, useValue: "nl-BE"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
