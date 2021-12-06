import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { OrdersDataService } from '../../services/orders-data.service';

@Component({
  selector: 'app-edit-orders',
  templateUrl: './edit-orders.component.html',
  styleUrls: ['./edit-orders.component.scss'],
})
export class EditOrdersComponent implements OnInit {
  reactiveForm: FormGroup;
  routerIndex$;
  ordersRowIndex;
  ordersData: any[];
  currentOrder: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordersDataService: OrdersDataService,
    private fb: FormBuilder,
  ) {
    this.reactiveForm = fb.group({
      product: [''],
      quantity: [''],
      sold: [''],
      total: [''],
      control: [''],

      img: [''],
      decorationCount: [],
    });
  }

  ngOnInit() {
    this.routerIndex$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.ordersRowIndex = params.get('idx');
        return this.ordersDataService.getOrdersData();
      }),
    );

    this.routerIndex$.subscribe(val => {
      this.ordersData = val;
      this.reactiveForm.patchValue(this.ordersData[this.ordersRowIndex]);
    });
  }

  onSubmit(form) {
    this.ordersData[this.ordersRowIndex] = form.value;
    this.ordersDataService.setOrdersData(this.ordersData);
    this.router.navigate(['/dashboard_ecommerce']);
  }

  turnBack() {
    this.router.navigate(['/dashboard_ecommerce']);
  }
}
