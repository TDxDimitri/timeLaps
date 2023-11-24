import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowCardComponent } from './yellow-card.component';

describe('YellowCardComponent', () => {
  let component: YellowCardComponent;
  let fixture: ComponentFixture<YellowCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YellowCardComponent]
    });
    fixture = TestBed.createComponent(YellowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
