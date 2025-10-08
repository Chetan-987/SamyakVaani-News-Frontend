import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthNews } from './health-news';

describe('HealthNews', () => {
  let component: HealthNews;
  let fixture: ComponentFixture<HealthNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
