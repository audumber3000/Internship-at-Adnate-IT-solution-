import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPhotoComponent } from './register-photo.component';

describe('RegisterPhotoComponent', () => {
  let component: RegisterPhotoComponent;
  let fixture: ComponentFixture<RegisterPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPhotoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
