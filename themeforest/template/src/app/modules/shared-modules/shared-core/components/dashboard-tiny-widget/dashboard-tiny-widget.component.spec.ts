import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTinyWidgetComponent } from './dashboard-tiny-widget.component';

describe('DashboardTinyWidgetComponent', () => {
  let component: DashboardTinyWidgetComponent;
  let fixture: ComponentFixture<DashboardTinyWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardTinyWidgetComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTinyWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
