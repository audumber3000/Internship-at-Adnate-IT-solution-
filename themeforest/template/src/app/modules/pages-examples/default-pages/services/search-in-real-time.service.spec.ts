import { TestBed } from '@angular/core/testing';

import { SearchInRealTimeService } from './search-in-real-time.service';

describe('SearchInRealTimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchInRealTimeService = TestBed.get(SearchInRealTimeService);
    expect(service).toBeTruthy();
  });
});
