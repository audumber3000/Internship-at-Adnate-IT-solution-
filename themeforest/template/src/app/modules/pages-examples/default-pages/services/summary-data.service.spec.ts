import { TestBed } from '@angular/core/testing';

import { SummaryDataService } from './summary-data.service';

describe('SummaryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SummaryDataService = TestBed.get(SummaryDataService);
    expect(service).toBeTruthy();
  });
});
