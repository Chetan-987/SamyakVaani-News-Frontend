import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleNews } from './vehicle-news';

describe('VehicleNews', () => {
  let component: VehicleNews;
  let fixture: ComponentFixture<VehicleNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
