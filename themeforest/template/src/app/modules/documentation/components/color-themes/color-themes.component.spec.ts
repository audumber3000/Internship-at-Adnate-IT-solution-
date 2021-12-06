import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorThemesComponent } from './color-themes.component';

describe('ColorThemesComponent', () => {
  let component: ColorThemesComponent;
  let fixture: ComponentFixture<ColorThemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColorThemesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
