import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChartDataService } from '../../../../shared-modules/shared-core/services/chart-data.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import {
  productSalesChartSettings,
  widgetOrdersToday,
  widgetSubscriptions,
  widgetTotalProducts,
  widgetTotalProfit,
  sellingProductsData,
  salesStatisticItems,
  productSales,
  topSellingProducts,
  salesStatSettings,
  dataYearly,
  dataMontly,
} from '../../assets/dashboard-charts-data';
import { OrdersDataService } from '../../services/orders-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { imageResoures } from '../../../assets/image.resources';
import { TranslateService } from '@ngx-translate/core';

const recentOrdersData = [
  {
    position: 1,
    invoice: 'In-123356',
    name: 'Lok Morisson',
    product: 'Xiaomi Mi 6',
    quantity: 1,
    date: '2017/12/25',
    location: 'Melbourne',
    status: 'In Progress',
  },
  {
    position: 2,
    invoice: 'In-254875',
    name: 'Norman Brown',
    product: 'Apple Iphone 6 Plus',
    quantity: 1,
    date: '2017/12/13',
    location: 'Tokio',
    status: 'Completed',
  },
  {
    position: 3,
    invoice: 'In-877868',
    name: 'Sam Medinberg',
    product: 'Xiaomi Mi 6',
    quantity: 1,
    date: '2017/12/13',
    location: 'Moscow',
    status: 'In Progress',
  },
  {
    position: 4,
    invoice: 'In-619876',
    name: 'Dave Morisson',
    product: 'Apple Iphone 5 S',
    quantity: 1,
    date: '2017/12/07',
    location: 'Melbourne',
    status: 'Completed',
  },
  {
    position: 5,
    invoice: 'In-218778',
    name: 'Klara Brown',
    product: 'Apple Iphone 6 Plus',
    quantity: 1,
    date: '2017/12/05',
    location: 'London',
    status: 'Completed',
  },
  {
    position: 6,
    invoice: 'In-626268',
    name: 'Molly Medinberg',
    product: 'Apple Iphone 7 Plus',
    quantity: 1,
    date: '2017/12/01',
    location: 'Rome',
    status: 'Completed',
  },
];

@Component({
  selector: 'app-dashboard-ecommerce',
  templateUrl: './dashboard-ecommerce.component.html',
  styleUrls: ['./dashboard-ecommerce.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: CarouselConfig, useValue: { interval: 2500, noPause: true, showIndicators: true } }],
})
export class DashboardEcommerceComponent implements OnInit {
  imageResoures = imageResoures;
  // tiny bars settings
  totalProductsData = this.chartData.generateBarsData(10);
  totalProfitsData = this.chartData.generateBarsData(10);
  ordersTodayData = this.chartData.generateBarsData(10);
  subscriptionsData = this.chartData.generateBarsData(10);

  // new orders table settings
  displayedColumns: string[] = ['product', 'quantity', 'sold', 'total', 'control'];
  dataSource;
  columnsAliases = {
    product: 'Product',
    quantity: 'Quantity',
    sold: 'Sold',
    total: 'Total',
    control: '',
  };

  itemsPerSlide = 1;
  singleSlideOffset = true;
  noWrap = true;
  yearlyData = true;

  displayedColumnsResponsive: string[] = [
    'position',
    'invoice',
    'name',
    'product',
    'quantity',
    'date',
    'location',
    'status',
  ];
  dataSourceResponsive = recentOrdersData;
  columnsAliasesResponsive = {
    position: '#',
    invoice: 'Invoice',
    name: 'First Name',
    product: 'Apple Iphone 7 Plus',
    quantity: 'Quantity',
    date: 'Date',
    location: 'Location',
    status: 'Status',
  };

  widgetTotalProducts;
  widgetTotalProfit;
  widgetOrdersToday;
  widgetSubscriptions;
  productSalesChartSettings;
  sellingProductsData;
  productSales;
  salesStatisticItems;
  topSellingProducts;
  salesStatSettings;
  dataYearly;
  dataMontly;

  translations;

  constructor(
    private chartData: ChartDataService,
    private ordersDataService: OrdersDataService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
  ) {
    ordersDataService
      .getOrdersData()
      .pipe(
        map(orders => {
          orders.forEach(item => {
            item.decorationCount = Array(this.generateDecorationCount(item.quantity));
          });
          return orders;
        }),
      )
      .subscribe(data => {
        this.dataSource = data;
      });

    Object.assign(this, {
      widgetTotalProducts,
      widgetTotalProfit,
      widgetOrdersToday,
      widgetSubscriptions,
      productSalesChartSettings,
      sellingProductsData,
      productSales,
      salesStatisticItems,
      topSellingProducts,
      salesStatSettings,
      dataYearly,
      dataMontly,
    });

    this.translate.stream('dashboard_commerce').subscribe(data => {
      this.translations = data;
    });
  }

  ngOnInit() {}

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

  select(data) {
    console.log('Item clicked', data);
  }

  generateDecorationCount(quantity) {
    if (quantity >= 0 && quantity < 20) {
      return 1;
    } else if (quantity >= 20 && quantity < 50) {
      return 2;
    } else if (quantity >= 50 && quantity < 100) {
      return 3;
    } else if (quantity >= 100 && quantity < 150) {
      return 4;
    } else if (quantity >= 150) {
      return 5;
    }
    return 0;
  }

  editTableRow(index) {
    this.router.navigate(['edit/' + index], { relativeTo: this.route });
  }

  deleteTableRow(index) {
    this.ordersDataService.deleteOrderRow(index);
  }
}
