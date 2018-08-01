import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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

const appRoutes: Routes = [
  { path: "berichten", component: BerichtLijstComponent },
  { path: "bericht-toevoegen", component: BerichtToevoegenComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: PaginaNietGevondenComponent }
];

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
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
