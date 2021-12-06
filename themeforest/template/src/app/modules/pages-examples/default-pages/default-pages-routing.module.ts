import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarContainerComponent } from './components/calendar-container/calendar-container.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { InvoiceTemplateComponent } from './components/invoice-template/invoice-template.component';
import { PricingCardsComponent } from './components/pricing-cards/pricing-cards.component';
import { ProjectSummaryComponent } from './components/project-summary/project-summary.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';

const routes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: 'calendar', component: CalendarContainerComponent, data: { animation: 'CalendarContainer' } },
  { path: 'faqs', component: FaqsComponent, data: { animation: 'Faqs' } },
  { path: 'gallery', component: GalleryComponent, data: { animation: 'Gallery' } },
  { path: 'invoice_template', component: InvoiceTemplateComponent, data: { animation: 'InvoiceTemplate' } },
  { path: 'pricing_cards', component: PricingCardsComponent, data: { animation: 'PricingCards' } },
  { path: 'project_summary', component: ProjectSummaryComponent, data: { animation: 'ProjectSummary' } },
  { path: 'search_results', component: SearchResultsComponent, data: { animation: 'SearchResults' } },
  { path: 'text_editor', component: TextEditorComponent, data: { animation: 'TextEditor' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultPagesRoutingModule {}
