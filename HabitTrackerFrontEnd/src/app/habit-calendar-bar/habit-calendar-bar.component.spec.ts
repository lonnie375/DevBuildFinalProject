import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitCalendarBarComponent } from './habit-calendar-bar.component';

describe('HabitCalendarBarComponent', () => {
  let component: HabitCalendarBarComponent;
  let fixture: ComponentFixture<HabitCalendarBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitCalendarBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitCalendarBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
