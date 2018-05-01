import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bericht-toevoegen",
  templateUrl: "./bericht-toevoegen.component.html",
  styleUrls: ["./bericht-toevoegen.component.css"]
})
export class BerichtToevoegenComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  berichtToevoegen(berichtTitel: HTMLInputElement, berichtTekst: HTMLInputElement): boolean {
    console.log(berichtTitel.value);
    console.log(berichtTekst.value);
    console.log();
    return false;
  }
}
