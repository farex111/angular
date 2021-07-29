import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperrComponent } from './swiperr.component';

describe('SwiperrComponent', () => {
  let component: SwiperrComponent;
  let fixture: ComponentFixture<SwiperrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
