import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerichtDetailComponent } from './bericht-detail.component';

describe('BerichtDetailComponent', () => {
  let component: BerichtDetailComponent;
  let fixture: ComponentFixture<BerichtDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerichtDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerichtDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
