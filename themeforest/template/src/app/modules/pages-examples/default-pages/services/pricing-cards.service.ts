import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PricingCard, pricingCardSet } from '../assets/pricing.card';

@Injectable({
  providedIn: 'root',
})
export class PricingCardsService {
  pricingCards: BehaviorSubject<PricingCard[]>;

  constructor() {
    this.pricingCards = new BehaviorSubject<PricingCard[]>(pricingCardSet);
  }

  getPricingCards(): Observable<PricingCard[]> {
    return this.pricingCards.asObservable();
  }
}
