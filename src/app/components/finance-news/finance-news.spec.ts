import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceNews } from './finance-news';

describe('FinanceNews', () => {
  let component: FinanceNews;
  let fixture: ComponentFixture<FinanceNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
