import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFitnessComponent } from './dashboard-fitness.component';

describe('DashboardFitnessComponent', () => {
  let component: DashboardFitnessComponent;
  let fixture: ComponentFixture<DashboardFitnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardFitnessComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
