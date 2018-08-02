import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BerichtComponent } from "./bericht/bericht/bericht.component";
import { BerichtToevoegenComponent } from "./bericht/bericht-toevoegen/bericht-toevoegen.component";
import { HomeComponent } from "./home/home.component";
import { PaginaNietGevondenComponent } from "./pagina-niet-gevonden/pagina-niet-gevonden.component";
import { BerichtLijstComponent } from './bericht/bericht-lijst/bericht-lijst.component';
import { BerichtDetailComponent } from './bericht/bericht-detail/bericht-detail.component';
import { ReactieComponent } from './bericht/reactie/reactie.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BerichtComponent,
    BerichtToevoegenComponent,
    HomeComponent,
    PaginaNietGevondenComponent,
    BerichtLijstComponent,
    BerichtDetailComponent,
    ReactieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
