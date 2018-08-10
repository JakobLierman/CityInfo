import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { basehttpInterceptorProviders, httpInterceptorProviders } from './../http-interceptors/index';
import { NavigationModule } from './../navigation/navigation.module';
import { BerichtDataService } from './bericht-data.service';
import { BerichtDetailComponent } from './bericht-detail/bericht-detail.component';
import { BerichtFilterPipe } from './bericht-filter.pipe';
import { BerichtLijstComponent } from './bericht-lijst/bericht-lijst.component';
import { BerichtResolver } from './bericht-resolver';
import { BerichtToevoegenComponent } from './bericht-toevoegen/bericht-toevoegen.component';
import { BerichtComponent } from './bericht/bericht.component';
import { ReactieLijstComponent } from './reactie/reactie-lijst/reactie-lijst.component';
import { ReactieToevoegenComponent } from './reactie/reactie-toevoegen/reactie-toevoegen.component';
import { ReactieComponent } from './reactie/reactie/reactie.component';

const routes = [
  { path: 'lijst', component: BerichtLijstComponent },
  { path: 'nieuw', component: BerichtToevoegenComponent },
  { path: ':id', component: BerichtDetailComponent, resolve: { bericht: BerichtResolver } }
];

@NgModule({
  declarations: [
    BerichtComponent,
    ReactieComponent,
    ReactieToevoegenComponent,
    ReactieLijstComponent,
    BerichtToevoegenComponent,
    BerichtLijstComponent,
    BerichtFilterPipe,
    BerichtDetailComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    NavigationModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    basehttpInterceptorProviders,
    httpInterceptorProviders,
    BerichtDataService,
    BerichtResolver
  ]
})
export class BerichtModule { }
