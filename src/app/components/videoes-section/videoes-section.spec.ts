import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoesSection } from './videoes-section';

describe('VideoesSection', () => {
  let component: VideoesSection;
  let fixture: ComponentFixture<VideoesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
