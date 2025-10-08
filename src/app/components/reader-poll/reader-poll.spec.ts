import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderPoll } from './reader-poll';

describe('ReaderPoll', () => {
  let component: ReaderPoll;
  let fixture: ComponentFixture<ReaderPoll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReaderPoll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaderPoll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
