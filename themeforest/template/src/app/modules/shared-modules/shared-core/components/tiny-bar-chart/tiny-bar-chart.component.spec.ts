import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyBarChartComponent } from './tiny-bar-chart.component';

describe('TinyBarChartComponent', () => {
  let component: TinyBarChartComponent;
  let fixture: ComponentFixture<TinyBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TinyBarChartComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinyBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
