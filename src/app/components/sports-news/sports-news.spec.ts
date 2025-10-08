import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsNews } from './sports-news';

describe('SportsNews', () => {
  let component: SportsNews;
  let fixture: ComponentFixture<SportsNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
