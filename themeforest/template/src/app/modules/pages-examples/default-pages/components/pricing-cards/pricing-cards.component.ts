import { Component, OnInit } from '@angular/core';
import { PricingCardsService } from '../../services/pricing-cards.service';
import { PricingCard } from '../../assets/pricing.card';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pricing-cards',
  templateUrl: './pricing-cards.component.html',
  styleUrls: ['./pricing-cards.component.scss'],
})
export class PricingCardsComponent implements OnInit {
  pricingCardsArray$: Observable<PricingCard[]>;
  constructor(private pricingCardService: PricingCardsService) {}

  ngOnInit() {
    this.pricingCardsArray$ = this.pricingCardService.getPricingCards();
  }
}
