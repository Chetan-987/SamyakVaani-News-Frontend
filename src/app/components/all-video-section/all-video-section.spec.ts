import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVideoSection } from './all-video-section';

describe('AllVideoSection', () => {
  let component: AllVideoSection;
  let fixture: ComponentFixture<AllVideoSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllVideoSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllVideoSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
