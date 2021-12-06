import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MaterialImportsModule } from '../../shared-modules/material-imports/material-imports.module';
import { ProductCardComponent } from './assets/product-card/product-card.component';
import { TabsModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgxGalleryModule } from 'ngx-gallery';
import { StarRatingComponent } from './assets/star-rating/star-rating.component';
import { DndDirective } from './assets/dnd.directive';
import { DropZoneComponent } from './assets/drop-zone/drop-zone.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    CartComponent,
    CatalogComponent,
    OrdersListComponent,
    PaymentsComponent,
    ProductEditComponent,
    ProductPageComponent,
    ProductListComponent,
    ProductCardComponent,
    StarRatingComponent,
    DndDirective,
    DropZoneComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ECommerceRoutingModule,
    MaterialImportsModule,
    TabsModule.forRoot(),
    NgSelectModule,
    NgxGalleryModule,
    NgxMaskModule.forRoot(),
  ],
})
export class ECommerceModule {}
