import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNietGevondenComponent } from '../pagina-niet-gevonden/pagina-niet-gevonden.component';
import { BerichtLijstComponent } from '../bericht/bericht-lijst/bericht-lijst.component';
import { HomeComponent } from '../home/home.component';
import { BerichtToevoegenComponent } from '../bericht/bericht-toevoegen/bericht-toevoegen.component';

const appRoutes: Routes = [
  { path: "overzicht", component: BerichtLijstComponent },
  { path: "bericht-toevoegen", component: BerichtToevoegenComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: PaginaNietGevondenComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
