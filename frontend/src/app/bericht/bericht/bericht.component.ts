import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bericht } from '../bericht.model';

@Component({
  selector: 'app-bericht',
  templateUrl: './bericht.component.html',
  styleUrls: ['./bericht.component.css']
})
export class BerichtComponent implements OnInit {
  @Input() public bericht: Bericht;
  @Output() public deleteBericht = new EventEmitter<Bericht>();

  constructor() {}

  ngOnInit() {}

  removeBericht() {
    this.deleteBericht.emit(this.bericht);
  }
}
