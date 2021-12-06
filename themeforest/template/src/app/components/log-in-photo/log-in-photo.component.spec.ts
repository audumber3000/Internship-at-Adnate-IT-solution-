import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInPhotoComponent } from './log-in-photo.component';

describe('LogInPhotoComponent', () => {
  let component: LogInPhotoComponent;
  let fixture: ComponentFixture<LogInPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogInPhotoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
