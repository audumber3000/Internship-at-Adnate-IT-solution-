import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardEcommerceComponent } from './components/dashboard-ecommerce/dashboard-ecommerce.component';
import { EditOrdersComponent } from './components/edit-orders/edit-orders.component';

const routes: Routes = [
  { path: '', component: DashboardEcommerceComponent, data: { animation: 'DashboardEcommerce' } },
  {
    path: 'edit/:idx',
    component: EditOrdersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardEcommerceRoutingModule {}
