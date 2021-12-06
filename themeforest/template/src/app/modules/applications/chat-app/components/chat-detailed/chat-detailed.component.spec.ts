import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDetailedComponent } from './chat-detailed.component';

describe('ChatDetailedComponent', () => {
  let component: ChatDetailedComponent;
  let fixture: ComponentFixture<ChatDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatDetailedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
