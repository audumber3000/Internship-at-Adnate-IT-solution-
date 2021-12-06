import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsControlsComponent } from './forms-controls.component';

describe('FormsControlsComponent', () => {
  let component: FormsControlsComponent;
  let fixture: ComponentFixture<FormsControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsControlsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
