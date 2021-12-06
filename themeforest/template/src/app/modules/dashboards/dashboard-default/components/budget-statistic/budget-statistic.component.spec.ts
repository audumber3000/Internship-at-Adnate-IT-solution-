import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetStatisticComponent } from './budget-statistic.component';

describe('BudgetStatisticComponent', () => {
  let component: BudgetStatisticComponent;
  let fixture: ComponentFixture<BudgetStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetStatisticComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
