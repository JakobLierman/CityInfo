import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactieLijstComponent } from './reactie-lijst.component';

describe('ReactieLijstComponent', () => {
  let component: ReactieLijstComponent;
  let fixture: ComponentFixture<ReactieLijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactieLijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactieLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
