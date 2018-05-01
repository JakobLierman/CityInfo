import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { OverzichtComponent } from "./overzicht/overzicht.component";
import { BerichtComponent } from "./bericht/bericht.component";
import { BerichtToevoegenComponent } from "./bericht-toevoegen/bericht-toevoegen.component";
import { HomeComponent } from "./home/home.component";
import { PaginaNietGevondenComponent } from "./pagina-niet-gevonden/pagina-niet-gevonden.component";

const appRoutes: Routes = [
  { path: "overzicht", component: OverzichtComponent },
  { path: "bericht-toevoegen", component: BerichtToevoegenComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: PaginaNietGevondenComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OverzichtComponent,
    BerichtComponent,
    BerichtToevoegenComponent,
    HomeComponent,
    PaginaNietGevondenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
