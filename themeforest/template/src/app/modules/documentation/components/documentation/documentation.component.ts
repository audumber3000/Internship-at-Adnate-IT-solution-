import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import {ThemeService} from '../../../../services/theme.service';

const routeAliases = {
  introduction: 'Introduction',
  installation: 'Installation',
  file_structure: 'File Structure',
  components: 'Components',
  form: 'Form',
  color_themes: 'Color Themes',
  navigation_item: 'Navigation Item',
  resources: 'Resources',
  changelog: 'Changelog',
};

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentationComponent implements OnInit {
  routeName;
  routeIndex;
  prevRouteName;
  prevRouteLink;
  nextRouteName;
  nextRouteLink;
  routesArray = [
    'introduction',
    'installation',
    'file structure',
    'components',
    'form',
    'color themes',
    'navigation item',
    'resources',
    'changelog'
  ];
  isDarkTheme: Observable<boolean>;

  constructor(private router: Router, private themeService: ThemeService) {
    router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        map((event: NavigationEnd) => routeAliases[event.urlAfterRedirects.split('/').pop()]),
      )
      .subscribe(val => {
        this.routeIndex = this.routesArray.findIndex(a => (a === val.toLowerCase()));
        this.prevRouteName = this.routesArray[this.routeIndex - 1];
        if (this.prevRouteName) {
          this.prevRouteLink = this.prevRouteName.replace(/ /g, '_');
        }
        this.nextRouteName = this.routesArray[this.routeIndex + 1];
        if (this.nextRouteName) {
          this.nextRouteLink = this.nextRouteName.replace(/ /g, '_');
        }
        return (
          this.routeName = val
        );
      });
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.getThemeState();
  }
}
