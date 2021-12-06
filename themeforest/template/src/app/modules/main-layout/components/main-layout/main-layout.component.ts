import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ThemeService } from '../../../../services/theme.service';
import { LayoutStateService } from '../../services/layout-state.service';
import { NotifierService } from 'angular-notifier';
import { timer } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { fadeInAnimate } from '../../../../route-animations';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [fadeInAnimate],
})
export class MainLayoutComponent implements OnInit, AfterViewInit {
  isSidebarCollapsed;
  isTopMenuActive;
  private readonly notifier: NotifierService;
  @ViewChild('greetingNotification', { static: false }) greetingNotificationTmpl;

  constructor(
    private themeService: ThemeService,
    private layoutState: LayoutStateService,
    notifierService: NotifierService,
  ) {
    this.isTopMenuActive = layoutState.getTopMenuState();
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.themeService.toggleLight();
    this.layoutState.getSideBarCollapsedState().subscribe(state => {
      this.isSidebarCollapsed = state;
    });
  }

  ngAfterViewInit() {
    timer(700).subscribe(() => this.showNotification());
  }

  showNotification() {
    this.notifier.show({
      message: '',
      type: 'info',
      template: this.greetingNotificationTmpl,
    });
  }

  closeNotification() {
    this.notifier.hideAll();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
