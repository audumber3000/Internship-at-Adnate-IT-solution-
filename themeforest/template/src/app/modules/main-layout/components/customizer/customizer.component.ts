import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../services/theme.service';
import { LayoutStateService } from '../../services/layout-state.service';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss'],
})
export class CustomizerComponent implements OnInit {
  isCollapsed = true;
  settingsImg = `${environment.deployAssetsPath}/assets/images/settings.svg`;
  sideBarCollapsedState$: Observable<boolean>;
  topMenuState$: Observable<boolean>;
  darkThemeState$: Observable<boolean>;
  borderRadiusState$: Observable<boolean>;
  blockShadowState$: Observable<boolean>;

  constructor(private themeService: ThemeService, private layoutState: LayoutStateService) {
    this.topMenuState$ = layoutState.getTopMenuState();
    this.darkThemeState$ = themeService.getThemeState();
    this.sideBarCollapsedState$ = layoutState.getSideBarCollapsedState();
    this.borderRadiusState$ = layoutState.getBorderRadiusState();
    this.blockShadowState$ = layoutState.getBlockShadowState();
  }

  ngOnInit() {}

  public handleOpen() {
    this.isCollapsed = !this.isCollapsed;
  }

  public changeSidebarVisibility(checked) {
    this.layoutState.setSideBarCollapsedState(checked);
  }

  public toggleTopNavigation(checked) {
    this.layoutState.setTopMenuState(checked);
  }

  public changeToDark(checked) {
    if (checked) {
      this.themeService.toggleDark();
    } else {
      this.themeService.toggleLight();
    }
  }

  public changeBorderRadius(checked) {
    this.layoutState.setBorderRadiusState(checked);
  }

  public toggleBoxShadow(checked) {
    this.layoutState.setBlockShadowState(checked);
  }
}
