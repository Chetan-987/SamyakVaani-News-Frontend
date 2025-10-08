import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechNews } from './tech-news';

describe('TechNews', () => {
  let component: TechNews;
  let fixture: ComponentFixture<TechNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
