import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAgBaseComponent } from './map-ag-base.component';

describe('MapAgBaseComponent', () => {
  let component: MapAgBaseComponent;
  let fixture: ComponentFixture<MapAgBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapAgBaseComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAgBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
