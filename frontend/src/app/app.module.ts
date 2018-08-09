import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeNl from '@angular/common/locales/nl';
import { LOCALE_ID, NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavigationModule } from './navigation/navigation.module';
import { PaginaNietGevondenComponent } from "./pagina-niet-gevonden/pagina-niet-gevonden.component";
import { UserModule } from './user/user.module';

registerLocaleData(localeNl, 'nl-BE');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginaNietGevondenComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NavigationModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "nl-BE" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
