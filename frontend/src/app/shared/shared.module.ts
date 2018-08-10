import { BackButtonComponent } from './back-button/back-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateSortPipe } from './date-sort.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BackButtonComponent,
    DateSortPipe
  ],
  exports: [
    BackButtonComponent
  ]
})
export class SharedModule { }
