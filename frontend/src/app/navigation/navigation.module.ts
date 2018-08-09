import { BackButtonComponent } from './back-button/back-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BackButtonComponent
  ],
  exports: [
    BackButtonComponent
  ]
})
export class NavigationModule { }
