import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentNews } from './entertainment-news';

describe('EntertainmentNews', () => {
  let component: EntertainmentNews;
  let fixture: ComponentFixture<EntertainmentNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntertainmentNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntertainmentNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
