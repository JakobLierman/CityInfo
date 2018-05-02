import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerichtLijstComponent } from './bericht-lijst.component';

describe('BerichtLijstComponent', () => {
  let component: BerichtLijstComponent;
  let fixture: ComponentFixture<BerichtLijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerichtLijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerichtLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
