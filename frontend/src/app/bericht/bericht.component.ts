import { Component, OnInit, Input } from "@angular/core";
import { Bericht } from "./bericht.model";

@Component({
  selector: "app-bericht",
  templateUrl: "./bericht.component.html",
  styleUrls: ["./bericht.component.css"]
})
export class BerichtComponent implements OnInit {
  @Input() bericht: Bericht;

  constructor() {
  }

  ngOnInit() {}
}
