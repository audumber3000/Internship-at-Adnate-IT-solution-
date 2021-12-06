import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../../../../services/theme.service';
import { EasingLogic, PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../../../../environments/environment';
import { imageResoures } from '../../assets/image.resources';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class LandingPageComponent implements OnInit {
  crypto = `${environment.deployAssetsPath}/assets/images/landing/demos/4.png`;
  eCommerce = `${environment.deployAssetsPath}/assets/images/landing/demos/3.png`;
  analytics = `${environment.deployAssetsPath}/assets/images/landing/demos/1.png`;
  fitness = `${environment.deployAssetsPath}/assets/images/landing/demos/2.png`;
  booking = `${environment.deployAssetsPath}/assets/images/landing/demos/5.png`;
  mobileApp = `${environment.deployAssetsPath}/assets/images/landing/demos/6.png`;

  title = 'ngEasyDEV';
  isCollapsed = false;
  imageResoures = imageResoures;
  darkThemeState;

  sliderContent = {
    email: {
      img: `${environment.deployAssetsPath}/assets/images/landing/applications_email.png`,
      description: 'Simple and convenient application for collecting and viewing letters',
      route: '/mail_app',
    },
    calendar: {
      img: `${environment.deployAssetsPath}/assets/images/landing/applications_calendar.png`,
      description: 'Do not miss a single important event in your life with the calendar application',
      route: '/default_pages/calendar',
    },
    chat: {
      img: `${environment.deployAssetsPath}/assets/images/landing/applications_chat.png`,
      description:
        "Communicate, make new acquaintances, save the history of correspondence. It's easy with our Chat app",
      route: '/chat_app',
    },
    todo: {
      img: `${environment.deployAssetsPath}/assets/images/landing/applications_todo.png`,
      description: 'Make a plan for the day, month, year, to forget nothing. Our task manager will help you!',
      route: '/todo_app',
    },
  };
  sliderInfo = this.sliderContent.calendar;

  constructor(
    private themeService: ThemeService,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
  ) {
    themeService.getThemeState().subscribe(state => {
      this.darkThemeState = !state;
      if (state) {
        this.crypto = `${environment.deployAssetsPath}/assets/images/landing/demos/4.png`;
        this.eCommerce = `${environment.deployAssetsPath}/assets/images/landing/demos/3.png`;
        this.analytics = `${environment.deployAssetsPath}/assets/images/landing/demos/1.png`;
        this.fitness = `${environment.deployAssetsPath}/assets/images/landing/demos/2.png`;
        this.booking = `${environment.deployAssetsPath}/assets/images/landing/demos/5.png`;
        this.mobileApp = `${environment.deployAssetsPath}/assets/images/landing/demos/6.png`;
      } else {
        this.crypto = `${environment.deployAssetsPath}/assets/images/landing/demos/1_3.png`;
        this.eCommerce = `${environment.deployAssetsPath}/assets/images/landing/demos/1_2.png`;
        this.analytics = `${environment.deployAssetsPath}/assets/images/landing/demos/1_1.png`;
        this.fitness = `${environment.deployAssetsPath}/assets/images/landing/demos/fitness_dark.png`;
        this.booking = `${environment.deployAssetsPath}/assets/images/landing/demos/booking_dark.png`;
        this.mobileApp = `${environment.deployAssetsPath}/assets/images/landing/demos/mobile_app_dark.png`;
      }
    });
  }

  ngOnInit() {}

  public changeToDark(checked) {
    if (checked) {
      this.themeService.toggleDark();
    } else {
      this.themeService.toggleLight();
    }
  }

  handleSliderToggle(event) {
    this.sliderInfo = this.sliderContent[event.target.value];
  }
}
