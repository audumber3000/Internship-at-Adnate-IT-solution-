import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  btcCurrencyChartSettings,
  cryptoChartData,
  cryptoChartsSettings,
  cryptoTrends,
} from '../../assets/dashboard-charts-data';
import { CurrencyDataService } from '../../services/currency-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { generateData } from '../../../../shared-modules/shared-core/assets/ngx-charts-settings';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard-crypto',
  templateUrl: './dashboard-crypto.component.html',
  styleUrls: ['./dashboard-crypto.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardCryptoComponent implements OnInit {
  // table settings
  displayedColumns: string[] = ['name', 'marketCap', 'price', 'volume', 'circulating', 'change', 'graph', 'control'];
  dataSource;
  columnsAliases = {
    name: 'Name',
    marketCap: 'Market Cap',
    price: 'Price',
    volume: 'Volume',
    circulating: 'Circulating Supply',
    change: 'Change',
    graph: 'Graph (7 days)',
    control: '',
  };
  cryptoCurrencyData: any;
  cryptoChartsSettings;
  cryptoChartData;
  btcCurrencyChartSettings;
  cryptoTrends;
  translations;

  constructor(
    private currencyDataService: CurrencyDataService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
  ) {
    this.cryptoCurrencyData = generateData(2, false, ['BTC', 'ETH'], 0, 180, 10);

    currencyDataService.getCurrencyData().subscribe(data => {
      this.dataSource = data;
    });

    Object.assign(this, {
      cryptoChartData,
      cryptoChartsSettings,
      cryptoTrends,
      btcCurrencyChartSettings,
    });

    this.translate.stream('dashboard_crypto').subscribe(data => {
      this.translations = data;
    });
  }

  ngOnInit() {}

  editTableRow(index) {
    this.router.navigate(['edit/' + index], { relativeTo: this.route });
  }

  deleteTableRow(index) {
    this.currencyDataService.deleteCurrencyRow(index);
  }
}
