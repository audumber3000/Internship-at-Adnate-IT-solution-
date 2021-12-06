import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/cart', pathMatch: 'full' },
  { path: 'cart', component: CartComponent, data: { animation: 'Cart' } },
  { path: 'catalog', component: CatalogComponent, data: { animation: 'Catalog' } },
  { path: 'orders_list', component: OrdersListComponent, data: { animation: 'OrdersList' } },
  { path: 'payment', component: PaymentsComponent, data: { animation: 'Payments' } },
  { path: 'product_edit', component: ProductEditComponent, data: { animation: 'ProductEdit' } },
  { path: 'product_page', component: ProductPageComponent, data: { animation: 'ProductPage' } },
  { path: 'product_list', component: ProductListComponent, data: { animation: 'ProductList' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECommerceRoutingModule {}
