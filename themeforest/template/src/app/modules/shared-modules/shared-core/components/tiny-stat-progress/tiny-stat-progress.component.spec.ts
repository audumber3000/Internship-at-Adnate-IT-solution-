import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyStatProgressComponent } from './tiny-stat-progress.component';

describe('TinyStatProgressComponent', () => {
  let component: TinyStatProgressComponent;
  let fixture: ComponentFixture<TinyStatProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TinyStatProgressComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinyStatProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
