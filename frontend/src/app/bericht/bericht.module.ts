import { BerichtResolver } from './bericht-resolver';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { httpInterceptorProviders, basehttpInterceptorProviders } from './../http-interceptors/index';
import { BerichtDataService } from './bericht-data.service';
import { BerichtDetailComponent } from './bericht-detail/bericht-detail.component';
import { BerichtLijstComponent } from './bericht-lijst/bericht-lijst.component';
import { BerichtToevoegenComponent } from './bericht-toevoegen/bericht-toevoegen.component';
import { BerichtComponent } from './bericht/bericht.component';
import { ReactieComponent } from './reactie/reactie.component';

const routes = [
  { path: 'lijst', component: BerichtLijstComponent },
  { path: 'nieuw', component: BerichtToevoegenComponent },
  { path: ':id', component: BerichtDetailComponent, resolve: { bericht: BerichtResolver } }
];

@NgModule({
  declarations: [
    BerichtComponent,
    ReactieComponent,
    BerichtToevoegenComponent,
    BerichtLijstComponent,
    BerichtDetailComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    basehttpInterceptorProviders,
    httpInterceptorProviders,
  ]
})
export class BerichtModule { }
