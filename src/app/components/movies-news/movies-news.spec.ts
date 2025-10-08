import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesNews } from './movies-news';

describe('MoviesNews', () => {
  let component: MoviesNews;
  let fixture: ComponentFixture<MoviesNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
