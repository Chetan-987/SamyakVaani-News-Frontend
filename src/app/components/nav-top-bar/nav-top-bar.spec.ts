import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTopBar } from './nav-top-bar';

describe('NavTopBar', () => {
  let component: NavTopBar;
  let fixture: ComponentFixture<NavTopBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavTopBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTopBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
