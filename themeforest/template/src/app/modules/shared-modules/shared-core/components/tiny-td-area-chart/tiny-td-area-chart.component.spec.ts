import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyTdAreaChartComponent } from './tiny-td-area-chart.component';

describe('TinyTdAreaChartComponent', () => {
  let component: TinyTdAreaChartComponent;
  let fixture: ComponentFixture<TinyTdAreaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TinyTdAreaChartComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinyTdAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
