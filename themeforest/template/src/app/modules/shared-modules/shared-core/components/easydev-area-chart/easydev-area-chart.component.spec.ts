import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasydevAreaChartComponent } from './easydev-area-chart.component';

describe('EasydevAreaChartComponent', () => {
  let component: EasydevAreaChartComponent;
  let fixture: ComponentFixture<EasydevAreaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EasydevAreaChartComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasydevAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
