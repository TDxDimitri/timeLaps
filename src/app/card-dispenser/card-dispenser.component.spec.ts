import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDispenserComponent } from './card-dispenser.component';

describe('CardDispenserComponent', () => {
  let component: CardDispenserComponent;
  let fixture: ComponentFixture<CardDispenserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDispenserComponent]
    });
    fixture = TestBed.createComponent(CardDispenserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
