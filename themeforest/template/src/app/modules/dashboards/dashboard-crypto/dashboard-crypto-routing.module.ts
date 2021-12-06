import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardCryptoComponent } from './components/dashboard-crypto/dashboard-crypto.component';
import { EditCurrencyComponent } from './components/edit-currency/edit-currency.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardCryptoComponent,
    data: { animation: 'DashboardCrypto' },
  },
  {
    path: 'edit/:idx',
    component: EditCurrencyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardCryptoRoutingModule {}
