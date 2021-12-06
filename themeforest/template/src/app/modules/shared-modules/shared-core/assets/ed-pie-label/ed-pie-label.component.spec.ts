import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdPieLabelComponent } from './ed-pie-label.component';

describe('EdPieLabelComponent', () => {
  let component: EdPieLabelComponent;
  let fixture: ComponentFixture<EdPieLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EdPieLabelComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdPieLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
