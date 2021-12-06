import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { CurrencyDataService } from '../../services/currency-data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-currency',
  templateUrl: './edit-currency.component.html',
  styleUrls: ['./edit-currency.component.scss'],
})
export class EditCurrencyComponent implements OnInit {
  reactiveForm: FormGroup;
  routerIndex$;
  currencyRowIndex;
  currencyData: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private currencyDataService: CurrencyDataService,
    private fb: FormBuilder,
  ) {
    this.reactiveForm = fb.group({
      marketCap: [''],
      price: [''],
      volume: [''],
      change: [''],
      circulating: [''],

      name: [''],
      graph: [''],
      control: [''],
    });
  }

  ngOnInit() {
    this.routerIndex$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.currencyRowIndex = params.get('idx');
        return this.currencyDataService.getCurrencyData();
      }),
    );

    this.routerIndex$.subscribe(val => {
      this.currencyData = val;
      this.reactiveForm.patchValue(this.currencyData[this.currencyRowIndex]);
    });
  }

  onSubmit(form) {
    this.currencyData[this.currencyRowIndex] = form.value;
    this.currencyDataService.setCurrencyData(this.currencyData);
    this.router.navigate(['/dashboard_crypto']);
  }

  turnBack() {
    this.router.navigate(['/dashboard_crypto']);
  }
}
