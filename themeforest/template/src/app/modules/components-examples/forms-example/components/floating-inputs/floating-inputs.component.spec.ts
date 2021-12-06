import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingInputsComponent } from './floating-inputs.component';

describe('FloatingInputsComponent', () => {
  let component: FloatingInputsComponent;
  let fixture: ComponentFixture<FloatingInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingInputsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
