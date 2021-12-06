import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageWidgetComponent } from './language-widget.component';

describe('LanguageWidgetComponent', () => {
  let component: LanguageWidgetComponent;
  let fixture: ComponentFixture<LanguageWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
