import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasydevPieGridComponent } from './easydev-pie-grid.component';

describe('EasydevPieGridComponent', () => {
  let component: EasydevPieGridComponent;
  let fixture: ComponentFixture<EasydevPieGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EasydevPieGridComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasydevPieGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
