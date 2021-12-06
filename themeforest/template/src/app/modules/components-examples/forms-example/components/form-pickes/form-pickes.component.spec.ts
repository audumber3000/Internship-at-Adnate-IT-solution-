import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPickesComponent } from './form-pickes.component';

describe('FormPickesComponent', () => {
  let component: FormPickesComponent;
  let fixture: ComponentFixture<FormPickesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormPickesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPickesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
