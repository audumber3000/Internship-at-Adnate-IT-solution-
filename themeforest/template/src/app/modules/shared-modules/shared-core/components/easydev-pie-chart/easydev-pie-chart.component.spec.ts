import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasydevPieChartComponent } from './easydev-pie-chart.component';

describe('EasydevPieChartComponent', () => {
  let component: EasydevPieChartComponent;
  let fixture: ComponentFixture<EasydevPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EasydevPieChartComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasydevPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
