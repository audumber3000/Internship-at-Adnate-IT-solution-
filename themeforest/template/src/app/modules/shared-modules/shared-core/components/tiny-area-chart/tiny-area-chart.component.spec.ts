import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyAreaChartComponent } from './tiny-area-chart.component';

describe('TinyAreaChartComponent', () => {
  let component: TinyAreaChartComponent;
  let fixture: ComponentFixture<TinyAreaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TinyAreaChartComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinyAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
