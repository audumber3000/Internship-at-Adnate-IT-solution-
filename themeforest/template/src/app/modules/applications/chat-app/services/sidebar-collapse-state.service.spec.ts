import { TestBed } from '@angular/core/testing';

import { SidebarCollapseStateService } from './sidebar-collapse-state.service';

describe('SidebarCollapseStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SidebarCollapseStateService = TestBed.get(SidebarCollapseStateService);
    expect(service).toBeTruthy();
  });
});
