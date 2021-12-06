import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { BsDatepickerConfig, BsDaterangepickerDirective } from 'ngx-bootstrap';
import {Observable} from "rxjs";
import {ThemeService} from "../../../../../services/theme.service";
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';

@Component({
  selector: 'app-form-pickes',
  templateUrl: './form-pickes.component.html',
  styleUrls: ['./form-pickes.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormPickesComponent implements OnInit {
  public bsConfig: Partial<BsDatepickerConfig>;
  bsConfigSelectWeek: Partial<BsDatepickerConfig>;
  isDarkTheme: Observable<boolean>;
  isLightTheme: boolean;

  @ViewChild('dp1', { static: true }) datepicker1: BsDaterangepickerDirective;
  @ViewChild('dp2', { static: true }) datepicker2: BsDaterangepickerDirective;
  @ViewChild('dp3', { static: true }) datepicker3: BsDaterangepickerDirective;

  public color = '#ff4861';
  public color1 = '#4ce1b6';
  public color2 = '#70bbfd';

  public colorPreset = [
    '#D0021B',
    '#F5A623',
    '#F8E71C',
    '#8B572A',
    '#7ED321',
    '#417505',
    '#BD10E0',
    '#9013FE',
    '#4A90E2',
    '#50E3C2',
    '#B8E986',
    '#000000',
    '#4A4A4A',
    '#9B9B9B',
    '#FFFFFF',
  ];

  public color2Preset = [
    '#D0021B',
    '#F5A623',
    '#F8E71C',
    '#8B572A',
    '#7ED321',
    '#417505',
    '#BD10E0',
    '#9013FE',
    '#4A90E2',
  ];

  timepickertheme: NgxMaterialTimepickerTheme;

  private datePickerColorTheme = 'theme-blue';

  constructor(private themeService: ThemeService) {
    this.bsConfig = { ...this.bsConfig, containerClass: this.isDarkTheme ? 'theme-dark' : this.datePickerColorTheme };
    this.bsConfigSelectWeek = { ...this.bsConfig, selectWeek: true };
    this.isDarkTheme = this.themeService.getThemeState();
    this.isLightTheme = !this.isDarkTheme;
    this.timepickertheme = this.isDarkTheme ? {
      container: {
        bodyBackgroundColor: '#424242',
        buttonColor: '#fff'
      },
      dial: {
        dialBackgroundColor: '#555',
      },
      clockFace: {
        clockFaceBackgroundColor: '#555',
        clockHandColor: '#9fbd90',
        clockFaceTimeInactiveColor: '#fff'
      }
    } : {};
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const Datepicker1 = this.datepicker1;
    const Datepicker2 = this.datepicker2;
    const Datepicker3 = this.datepicker3;
    const self = this;
    this.isDarkTheme.subscribe({
      next(isLightTheme) {
        const mybsConfig = { ...self.bsConfig, containerClass: isLightTheme ? 'theme-blue' : 'theme-dark'};
        self.bsConfig = mybsConfig;
        self.isLightTheme = isLightTheme;
        self.bsConfigSelectWeek = { ...mybsConfig, selectWeek: true };
        Datepicker1.setConfig();
        Datepicker2.setConfig();
        Datepicker3.setConfig();
        self.timepickertheme = isLightTheme ? {} : {
          container: {
            bodyBackgroundColor: '#424242',
            buttonColor: '#fff'
          },
          dial: {
            dialBackgroundColor: '#555',
          },
          clockFace: {
            clockFaceBackgroundColor: '#555',
            clockHandColor: '#9fbd90',
            clockFaceTimeInactiveColor: '#fff'
          }
        };
      },
      error(msg) { console.log('Error Getting Location: ', msg); }
    });
  }
}
