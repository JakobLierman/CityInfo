import { BackButtonComponent } from "./back-button/back-button.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DateSortPipe } from "./date-sort.pipe";
import { NavUserComponent } from "./nav-user/nav-user.component";

@NgModule({
  imports: [CommonModule],
  declarations: [BackButtonComponent, DateSortPipe, NavUserComponent],
  exports: [BackButtonComponent, DateSortPipe, NavUserComponent]
})
export class SharedModule {}
