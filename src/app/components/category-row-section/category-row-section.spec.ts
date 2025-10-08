import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRowSection } from './category-row-section';

describe('CategoryRowSection', () => {
  let component: CategoryRowSection;
  let fixture: ComponentFixture<CategoryRowSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryRowSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryRowSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
