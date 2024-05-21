import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyRatingComponent } from './journey-rating.component';

describe('JourneyRatingComponent', () => {
  let component: JourneyRatingComponent;
  let fixture: ComponentFixture<JourneyRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
