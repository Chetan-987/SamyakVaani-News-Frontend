import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsBanner } from './ads-banner';

describe('AdsBanner', () => {
  let component: AdsBanner;
  let fixture: ComponentFixture<AdsBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdsBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
