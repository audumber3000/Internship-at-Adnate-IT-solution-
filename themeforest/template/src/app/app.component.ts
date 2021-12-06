import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loadingRoute = false;
  asyncLoadCount = 0;

  constructor(private themeService: ThemeService, private router: Router, private translate: TranslateService) {
    this.themeService.toggleLight();

    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof RouteConfigLoadStart) {
        this.asyncLoadCount++;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.asyncLoadCount--;
      }
      this.loadingRoute = !!this.asyncLoadCount;

      window.scrollTo(0, 0);
    });

    this.translate.setDefaultLang('en');
  }
}
