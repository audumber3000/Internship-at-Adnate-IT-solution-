import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieGridChartSetComponent } from './pie-grid-chart-set.component';

describe('PieGridChartSetComponent', () => {
  let component: PieGridChartSetComponent;
  let fixture: ComponentFixture<PieGridChartSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PieGridChartSetComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieGridChartSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
