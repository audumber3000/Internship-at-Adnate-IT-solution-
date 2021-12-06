import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ThemeService} from "../../../../../services/theme.service";

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
})
export class TextEditorComponent implements OnInit {
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.getThemeState();
  }
}
