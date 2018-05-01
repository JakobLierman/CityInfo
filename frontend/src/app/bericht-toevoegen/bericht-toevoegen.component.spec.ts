import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerichtToevoegenComponent } from './bericht-toevoegen.component';

describe('BerichtToevoegenComponent', () => {
  let component: BerichtToevoegenComponent;
  let fixture: ComponentFixture<BerichtToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerichtToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerichtToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
