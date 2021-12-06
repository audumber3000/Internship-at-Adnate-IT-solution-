import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const data = [
  {
    name: 'Bitcoin',
    marketCap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    circulating: '$ 6 432 323 btc',
    change: '0,59%',
    graph: 'Graph (7 days)',
    control: '',
  },
  {
    name: 'Ethereum',
    marketCap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    circulating: '$ 6 432 323 eth',
    change: '0,59%',
    graph: 'Graph (7 days)',
    control: '',
  },
  {
    name: 'Ripple',
    marketCap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    circulating: '$ 6 432 323 xrp',
    change: '0,59%',
    graph: 'Graph (7 days)',
    control: '',
  },
  {
    name: 'Bitcoin Cash',
    marketCap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    circulating: '$ 6 432 323 bch',
    change: '0,59%',
    graph: 'Graph (7 days)',
    control: '',
  },
  {
    name: 'Eos',
    marketCap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    circulating: '$ 6 432 323 eos',
    change: '0,59%',
    graph: 'Graph (7 days)',
    control: '',
  },
  {
    name: 'Litecoin',
    marketCap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    circulating: '$ 6 432 323 ltc',
    change: '0,59%',
    graph: 'Graph (7 days)',
    control: '',
  },
  {
    name: 'Cardano',
    marketCap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    circulating: '$ 6 432 323 ada',
    change: '0,59%',
    graph: 'Graph (7 days)',
    control: '',
  },
  {
    name: 'Stellar',
    marketCap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    circulating: '$ 6 432 323 xlm',
    change: '0,59%',
    graph: 'Graph (7 days)',
    control: '',
  },
  {
    name: 'IOTA',
    marketCap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    circulating: '$ 6 432 323 iota',
    change: '0,59%',
    graph: 'Graph (7 days)',
    control: '',
  },
  {
    name: 'NEO',
    marketCap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    circulating: '$ 6 432 323 neo',
    change: '0,59%',
    graph: 'Graph (7 days)',
    control: '',
  },
];

@Injectable({
  providedIn: 'root',
})
export class CurrencyDataService {
  currencyData: BehaviorSubject<any[]>;

  constructor() {
    this.currencyData = new BehaviorSubject<any[]>(data);
  }

  getCurrencyData() {
    return this.currencyData.asObservable();
  }

  setCurrencyData(currencyData) {
    this.currencyData.next(currencyData);
  }

  deleteCurrencyRow(index) {
    const currencyRows = [...this.currencyData.value];
    currencyRows.splice(index, 1);
    this.currencyData.next(currencyRows);
  }
}
