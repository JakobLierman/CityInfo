import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactieComponent } from './reactie.component';

describe('ReactieComponent', () => {
  let component: ReactieComponent;
  let fixture: ComponentFixture<ReactieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
