import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLayoutExampleComponent } from './form-layout-example.component';

describe('FormLayoutExampleComponent', () => {
  let component: FormLayoutExampleComponent;
  let fixture: ComponentFixture<FormLayoutExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormLayoutExampleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLayoutExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
