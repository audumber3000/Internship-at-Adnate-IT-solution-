import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDetailedComponent } from './email-detailed.component';

describe('EmailDetailedComponent', () => {
  let component: EmailDetailedComponent;
  let fixture: ComponentFixture<EmailDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmailDetailedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
