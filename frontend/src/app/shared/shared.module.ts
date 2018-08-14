import {BackButtonComponent} from "./back-button/back-button.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReversePipe} from "./reverse.pipe";
import {NavUserComponent} from "./nav-user/nav-user.component";

@NgModule({
  imports: [CommonModule],
  declarations: [BackButtonComponent, ReversePipe, NavUserComponent],
  exports: [BackButtonComponent, ReversePipe, NavUserComponent]
})
export class SharedModule {
}
