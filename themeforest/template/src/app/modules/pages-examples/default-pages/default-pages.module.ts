import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultPagesRoutingModule } from './default-pages-routing.module';
import { CalendarContainerComponent } from './components/calendar-container/calendar-container.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { CollapseItemComponent } from './components/faqs/assets/collapse-item/collapse-item.component';
import { MaterialImportsModule } from '../../shared-modules/material-imports/material-imports.module';
import { CollapseModule, ProgressbarModule } from 'ngx-bootstrap';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { ProjectSummaryComponent } from './components/project-summary/project-summary.component';
import { ChartsModule as ngChartsModule } from 'ng2-charts';
import { QuillModule } from 'ngx-quill'
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { AngularPaginatorModule } from 'angular-paginator';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { FormsModule } from '@angular/forms';
import { InvoiceTemplateComponent } from './components/invoice-template/invoice-template.component';
import { PricingCardsComponent } from './components/pricing-cards/pricing-cards.component';
import { SharedCoreModule } from '../../shared-modules/shared-core/shared-core.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    CalendarContainerComponent,
    CollapseItemComponent,
    FaqsComponent,
    GalleryComponent,
    ProjectSummaryComponent,
    SearchResultsComponent,
    TextEditorComponent,
    InvoiceTemplateComponent,
    PricingCardsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DefaultPagesRoutingModule,
    CollapseModule.forRoot(),
    QuillModule.forRoot(),
    MaterialImportsModule,
    NgxGalleryModule,
    ngChartsModule,
    ProgressbarModule.forRoot(),
    AngularPaginatorModule,
    SharedCoreModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  exports: [],
})
export class DefaultPagesModule {}
