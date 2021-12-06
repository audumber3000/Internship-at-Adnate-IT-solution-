import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMobileAppComponent } from './dashboard-mobile-app.component';

describe('DashboardMobileAppComponent', () => {
  let component: DashboardMobileAppComponent;
  let fixture: ComponentFixture<DashboardMobileAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardMobileAppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMobileAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
