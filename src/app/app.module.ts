import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { OverzichtComponent } from './overzicht/overzicht.component';
import { BerichtComponent } from './bericht/bericht.component';
import { BerichtToevoegenComponent } from './bericht-toevoegen/bericht-toevoegen.component';

@NgModule({
  declarations: [AppComponent, OverzichtComponent, BerichtComponent, BerichtToevoegenComponent],
  imports: [BrowserModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
