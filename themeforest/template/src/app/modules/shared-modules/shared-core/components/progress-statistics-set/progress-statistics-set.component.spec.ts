import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressStatisticsSetComponent } from './progress-statistics-set.component';

describe('ProgressStatisticsSetComponent', () => {
  let component: ProgressStatisticsSetComponent;
  let fixture: ComponentFixture<ProgressStatisticsSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressStatisticsSetComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressStatisticsSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
