import { environment } from '../../../../../environments/environment';

export interface PricingCard {
  img;
  plan;
  price;
  users;
  storage;
  update;
  support;
  color;
}

export const pricingCardSet: PricingCard[] = [
  {
    img: `${environment.deployAssetsPath}/assets/images/pricing_cards/004-paper-plane.svg`,
    plan: 'Basic',
    price: '0',
    users: '2 Users',
    storage: '500 Gb storage',
    update: 'Monthly update',
    support: 'Free support',
    color: 'primary',
  },
  {
    img: `${environment.deployAssetsPath}/assets/images/pricing_cards/002-hot-air-balloon.svg`,
    plan: 'Special',
    price: '5',
    users: '4 Users',
    storage: '1 Tb storage',
    update: 'Monthly update',
    support: 'Free support',
    color: 'info',
  },
  {
    img: `${environment.deployAssetsPath}/assets/images/pricing_cards/003-airplane.svg`,
    plan: 'Pro',
    price: '10',
    users: '6 Users',
    storage: '1 Tb storage',
    update: 'Monthly update',
    support: 'Free support',
    color: 'warning',
  },
  {
    img: `${environment.deployAssetsPath}/assets/images/pricing_cards/001-rocket.svg`,
    plan: 'Premium',
    price: '15',
    users: 'Unlimited Users',
    storage: '100 Tb storage',
    update: 'Monthly update',
    support: 'Free support',
    color: 'danger',
  },
];
