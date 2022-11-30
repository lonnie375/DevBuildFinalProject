import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerDetailComponent } from './tracker-detail.component';

describe('TrackerDetailComponent', () => {
  let component: TrackerDetailComponent;
  let fixture: ComponentFixture<TrackerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
