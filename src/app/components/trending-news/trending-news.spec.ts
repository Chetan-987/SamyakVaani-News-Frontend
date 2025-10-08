import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingNews } from './trending-news';

describe('TrendingNews', () => {
  let component: TrendingNews;
  let fixture: ComponentFixture<TrendingNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
