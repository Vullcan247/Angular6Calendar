import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxycalendarComponent } from './foxycalendar.component';

describe('FoxycalendarComponent', () => {
  let component: FoxycalendarComponent;
  let fixture: ComponentFixture<FoxycalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoxycalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoxycalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
