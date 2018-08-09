import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactieToevoegenComponent } from './reactie-toevoegen.component';

describe('ReactieToevoegenComponent', () => {
  let component: ReactieToevoegenComponent;
  let fixture: ComponentFixture<ReactieToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactieToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactieToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
