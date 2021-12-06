import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaymentsComponent implements OnInit {
  masterCard = `${environment.deployAssetsPath}/assets/images/for_store/cards/mc.svg`;
  visa = `${environment.deployAssetsPath}/assets/images/for_store/cards/visa.svg`;
  payPal = `${environment.deployAssetsPath}/assets/images/for_store/cards/paypal.svg`;
  constructor() {}

  ngOnInit() {}
}
