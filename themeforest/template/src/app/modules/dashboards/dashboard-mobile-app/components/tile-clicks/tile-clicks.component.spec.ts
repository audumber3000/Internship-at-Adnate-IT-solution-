import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileClicksComponent } from './tile-clicks.component';

describe('TileClicksComponent', () => {
  let component: TileClicksComponent;
  let fixture: ComponentFixture<TileClicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TileClicksComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
