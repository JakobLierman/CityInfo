import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Reactie } from '../reactie.model';

@Component({
  selector: 'app-reactie',
  templateUrl: './reactie.component.html',
  styleUrls: ['./reactie.component.css']
})
export class ReactieComponent implements OnInit {
  @Input() public reactie: Reactie;
  @Output() public deleteReactie = new EventEmitter<Reactie>();

  constructor() { }

  ngOnInit() {
  }

  removeReactie() {
    this.deleteReactie.emit(this.reactie);
  }
}
