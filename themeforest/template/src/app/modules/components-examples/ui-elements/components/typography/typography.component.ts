import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ThemeService} from '../../../../../services/theme.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.getThemeState();
  }
}
