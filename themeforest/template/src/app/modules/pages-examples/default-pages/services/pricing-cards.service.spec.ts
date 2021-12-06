import { TestBed } from '@angular/core/testing';

import { PricingCardsService } from './pricing-cards.service';

describe('PricingCardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PricingCardsService = TestBed.get(PricingCardsService);
    expect(service).toBeTruthy();
  });
});
