import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskFormComponent } from './mask-form.component';

describe('MaskFormComponent', () => {
  let component: MaskFormComponent;
  let fixture: ComponentFixture<MaskFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MaskFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
