import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PaginaNietGevondenComponent } from "./pagina-niet-gevonden/pagina-niet-gevonden.component";
import { UserModule } from './user/user.module';


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
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
