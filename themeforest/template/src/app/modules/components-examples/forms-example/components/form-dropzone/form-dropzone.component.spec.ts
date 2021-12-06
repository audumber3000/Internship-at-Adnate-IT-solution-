import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDropzoneComponent } from './form-dropzone.component';

describe('FormDropzoneComponent', () => {
  let component: FormDropzoneComponent;
  let fixture: ComponentFixture<FormDropzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormDropzoneComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDropzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
