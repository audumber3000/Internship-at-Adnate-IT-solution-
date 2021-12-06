import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-widget',
  templateUrl: './language-widget.component.html',
  styleUrls: ['./language-widget.component.scss'],
})
export class LanguageWidgetComponent implements OnInit {
  isCollapsed = true;

  languages = [
    {
      name: 'en',
      img: `${environment.deployAssetsPath}/assets/images/language/gb.png`,
      alt: 'gb',
    },
    {
      name: 'fr',
      img: `${environment.deployAssetsPath}/assets/images/language/fr.png`,
      alt: 'fr',
    },
    {
      name: 'de',
      img: `${environment.deployAssetsPath}/assets/images/language/de.png`,
      alt: 'de',
    },
  ];

  currentLang;

  constructor(private translate: TranslateService) {
    this.currentLang = this.languages[0];
  }

  ngOnInit() {}

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }

  changeLanguage(lang) {
    this.translate.use(lang);
    switch(lang) {
      case 'en':
        this.currentLang = this.languages[0]
        break;
      case 'fr':
        this.currentLang = this.languages[1];
        break;
      case 'de':
        this.currentLang = this.languages[2]
        break;
      default:
        break;
    }
    this.toggle();
  }
}
