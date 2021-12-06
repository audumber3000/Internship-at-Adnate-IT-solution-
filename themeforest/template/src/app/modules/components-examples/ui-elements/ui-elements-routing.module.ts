import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ProgressBarsComponent } from './components/progress-bars/progress-bars.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TooltipsPopoversComponent } from './components/tooltips-popovers/tooltips-popovers.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PanelsComponent } from './components/panels/panels.component';
import { GridsComponent } from './components/grids/grids.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TypographyComponent } from './components/typography/typography.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SlidersComponent } from './components/sliders/sliders.component';

const routes: Routes = [
  { path: '', redirectTo: '/alerts', pathMatch: 'full' },
  { path: 'alerts', component: AlertsComponent, data: { animation: 'AlertsComponent' } },
  { path: 'buttons', component: ButtonsComponent, data: { animation: 'ButtonsComponent' } },
  { path: 'carousel', component: CarouselComponent, data: { animation: 'CarouselComponent' } },
  { path: 'collapse', component: CollapseComponent, data: { animation: 'CollapseComponent' } },
  { path: 'grids', component: GridsComponent, data: { animation: 'GridsComponent' } },
  { path: 'modals', component: ModalsComponent, data: { animation: 'ModalsComponent' } },
  { path: 'notifications', component: NotificationsComponent, data: { animation: 'NotificationsComponent' } },
  { path: 'panels', component: PanelsComponent, data: { animation: 'PanelsComponent' } },
  { path: 'progress_bars', component: ProgressBarsComponent, data: { animation: 'ProgressBarsComponent' } },
  { path: 'sliders', component: SlidersComponent, data: { animation: 'SlidersComponent' } },
  { path: 'tabs', component: TabsComponent, data: { animation: 'TabsComponent' } },
  { path: 'timeline', component: TimelineComponent, data: { animation: 'TimelineComponent' } },
  { path: 'tooltips', component: TooltipsPopoversComponent, data: { animation: 'TooltipsPopoversComponent' } },
  { path: 'typography', component: TypographyComponent, data: { animation: 'TypographyComponent' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiElementsRoutingModule {}
