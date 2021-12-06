import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarHeaderComponent } from './components/calendar/assets/calendar-header/calendar-header.component';
import { PanelComponent } from './components/panel/panel.component';
import { MaterialImportsModule } from '../material-imports/material-imports.module';
import { TinyBarChartComponent } from './components/tiny-bar-chart/tiny-bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxChartZeroMarginDirective } from './directives/ngx-chart-zero-margin.directive';
import { EasydevPieGridComponent } from './components/easydev-pie-grid/easydev-pie-grid.component';
import { EasydevPieChartComponent } from './components/easydev-pie-chart/easydev-pie-chart.component';
import { AgmCoreModule } from '@agm/core';
import { MapAgBaseComponent } from './components/map-ag-base/map-ag-base.component';
import { DashboardPieChartComponent } from './components/dashboard-pie-chart/dashboard-pie-chart.component';
import { TinyAreaChartComponent } from './components/tiny-area-chart/tiny-area-chart.component';
import { EasydevAreaChartComponent } from './components/easydev-area-chart/easydev-area-chart.component';
import { NgxChartAreaZeroMarignDirective } from './directives/ngx-chart-area-zero-marign.directive';
import { TinyTdAreaChartComponent } from './components/tiny-td-area-chart/tiny-td-area-chart.component';
import { TinyStatProgressComponent } from './components/tiny-stat-progress/tiny-stat-progress.component';
import { ProgressbarModule } from 'ngx-bootstrap';
import { PieGridChartSetComponent } from './components/pie-grid-chart-set/pie-grid-chart-set.component';
import { ProgressStatisticsSetComponent } from './components/progress-statistics-set/progress-statistics-set.component';
import { SidebarStateDirective } from './directives/sidebar-state.directive';
import { DashboardTinyWidgetComponent } from './components/dashboard-tiny-widget/dashboard-tiny-widget.component';
import { EdPieLabelComponent } from './assets/ed-pie-label/ed-pie-label.component';
import { EdPieSeriesComponent } from './assets/ed-pie-series/ed-pie-series.component';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarHeaderComponent,
    PanelComponent,
    TinyBarChartComponent,
    NgxChartZeroMarginDirective,
    EasydevPieGridComponent,
    EasydevPieChartComponent,
    MapAgBaseComponent,
    DashboardPieChartComponent,
    TinyAreaChartComponent,
    EasydevAreaChartComponent,
    NgxChartAreaZeroMarignDirective,
    TinyTdAreaChartComponent,
    TinyStatProgressComponent,
    PieGridChartSetComponent,
    ProgressStatisticsSetComponent,
    SidebarStateDirective,
    DashboardTinyWidgetComponent,
    EdPieLabelComponent,
    EdPieSeriesComponent,
  ],
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MaterialImportsModule,
    NgxChartsModule,
    AgmCoreModule.forRoot({
      apiKey: '&v=3',
    }),
    ProgressbarModule.forRoot(),
  ],
  exports: [
    CalendarComponent,
    PanelComponent,
    TinyBarChartComponent,
    NgxChartZeroMarginDirective,
    EasydevPieGridComponent,
    EasydevPieChartComponent,
    MapAgBaseComponent,
    DashboardPieChartComponent,
    TinyAreaChartComponent,
    EasydevAreaChartComponent,
    TinyTdAreaChartComponent,
    TinyStatProgressComponent,
    PieGridChartSetComponent,
    ProgressStatisticsSetComponent,
    SidebarStateDirective,
    DashboardTinyWidgetComponent,
  ],
})
export class SharedCoreModule {}
