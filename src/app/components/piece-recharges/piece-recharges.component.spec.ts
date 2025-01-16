import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceRechargesComponent } from './piece-recharges.component';

describe('PieceRechargesComponent', () => {
  let component: PieceRechargesComponent;
  let fixture: ComponentFixture<PieceRechargesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieceRechargesComponent]
    });
    fixture = TestBed.createComponent(PieceRechargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
