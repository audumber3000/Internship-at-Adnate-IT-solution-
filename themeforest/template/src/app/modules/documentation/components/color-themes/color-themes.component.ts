import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-themes',
  templateUrl: './color-themes.component.html',
  styleUrls: ['./color-themes.component.scss'],
})
export class ColorThemesComponent implements OnInit {
  themeCode = `export const lightTheme = {
  colorBackground: 'white',
  colorBackgroundBody: '#f2f4f7',
  colorText: '#646777',
  colorTextAdditional: '#646777',
  logoImg: 'url(../assets/images/logo/logo_light.svg)',
  colorHover: '#fafbfe',
  colorFolderHover: '#f0eeee',
  colorBorder: '#eff1f5',
  colorIcon: '#dddddd',
  imgInvert: 'invert(0%)',
  colorFieldsBorder: '#f2f4f7',
  colorBubble: 'rgba(242, 244, 247, 0.65)',
  colorBubbleActive: 'rgba(234, 238, 255, 0.6)',
  colorScrollbar: '#B4BFD0',
  colorFitness: '#646777',
  colorDisabled: '#dddddd',
};`;

  importServiceCode = `constructor(private themeService: ThemeService, private layoutState: LayoutStateService) {}`;

  changeThemeDarkCode = `this.themeService.toggleDark();`;
  changeThemeLightCode = `this.themeService.toggleLight();`;
  constructor() {}

  ngOnInit() {}
}
