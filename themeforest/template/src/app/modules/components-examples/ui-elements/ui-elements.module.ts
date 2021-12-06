import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiElementsRoutingModule } from './ui-elements-routing.module';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { AlertPanelComponent } from './assets/alert-panel/alert-panel.component';
import { AlertComponent } from './assets/alert/alert.component';
import { MatIconModule } from '@angular/material/icon';

import { ModalComponent } from './assets/modal/modal.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ModalPanelComponent } from './components/modals/assets/modal-panel/modal-panel.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressBarsComponent } from './components/progress-bars/progress-bars.component';
import {
  BsDropdownModule,
  CollapseModule,
  PopoverModule,
  ProgressbarModule,
  TabsModule,
  TooltipModule,
} from 'ngx-bootstrap';
import { ExpandComponent } from './components/buttons/assets/expand/expand.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TooltipsPopoversComponent } from './components/tooltips-popovers/tooltips-popovers.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { CollapseItemComponent } from './components/collapse/assets/collapse-item/collapse-item.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PanelsComponent } from './components/panels/panels.component';
import { GridsComponent } from './components/grids/grids.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TypographyComponent } from './components/typography/typography.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { Ng5SliderModule } from 'ng5-slider';
import { SlidersComponent } from './components/sliders/sliders.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { NguCarouselModule } from '@ngu/carousel';
import { MaterialImportsModule } from '../../shared-modules/material-imports/material-imports.module';
import { SharedCoreModule } from '../../shared-modules/shared-core/shared-core.module';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  declarations: [
    AlertsComponent,
    ButtonsComponent,
    AlertPanelComponent,
    AlertComponent,
    ModalComponent,
    ModalsComponent,
    ModalPanelComponent,
    ProgressBarsComponent,
    ExpandComponent,
    TabsComponent,
    TooltipsPopoversComponent,
    CollapseComponent,
    CollapseItemComponent,
    NotificationsComponent,
    PanelsComponent,
    GridsComponent,
    TimelineComponent,
    TypographyComponent,
    CarouselComponent,
    SlidersComponent,
  ],
  imports: [
    CommonModule,
    UiElementsRoutingModule,
    MatIconModule,
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    Ng5SliderModule,
    DragScrollModule,
    NguCarouselModule,
    MaterialImportsModule,
    SharedCoreModule,
    SimpleNotificationsModule.forRoot(),
  ],
})
export class UIElementsModule {}
