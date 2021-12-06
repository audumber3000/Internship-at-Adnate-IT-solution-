import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-list',
  templateUrl: './components-list.component.html',
  styleUrls: ['./components-list.component.scss'],
})
export class ComponentsListComponent implements OnInit {
  alertsCode = `<button type="button" 
        class="btn btn-secondary btn-show-alert" 
        (click)="toggleVisibility()" 
        *ngIf="!isVisible; else alert">Show Alert</button>
<ng-template #alert>
  <div class="alert" [ngClass]="color">
    <div class="alert-icon" *ngIf="icon"><mat-icon>{{icon}}</mat-icon>
    </div>
    <button class="close" type="button" (click)="toggleVisibility()">
    <span class="lnr lnr-cross"></span></button>
    <div class="alert-content">
      <p><ng-content></ng-content></p>
    </div>
  </div>
</ng-template>`;

  buttonsCode = `<div role="toolbar" class="btn-toolbar">
  <button class="btn btn-outline-secondary">Minimal</button>
  <button class="btn btn-secondary">Secondary</button>
  <button disabled class="btn btn-secondary disabled">Disabled</button>
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-success">Success</button>
  <button class="btn btn-warning">Warning</button>
  <button class="btn btn-danger">Danger</button>
  <button class="icon btn btn-primary">
    <p><mat-icon>settings</mat-icon>Settings</p>
  </button>
  <button class="icon icon-right btn btn-outline-primary">
    <p>Settings <mat-icon>send</mat-icon></p>
  </button>
 </div>`;

  carouselTemplateCode = `<ngu-carousel #multiplyCarousel [inputs]="multiplyCarouselConfig" [dataSource]="multiplyCarouselItems">
    <ngu-tile *nguCarouselDef="let item; let i = index; let ani = animate">
      <div class="tile" [style.background]="'url('+item+')'"></div>
    </ngu-tile>

    <button NguCarouselPrev class="slick-arrow slick-prev" [style.opacity]="multiplyCarousel.isFirst ? 0.5:1"></button>
    <button NguCarouselNext class="slick-arrow slick-next" [style.opacity]="multiplyCarousel.isLast ? 0.5:1"></button>

    <ul class="myPoint" NguCarouselPoint>
      <li *ngFor="let i of multiplyCarousel.pointNumbers; let i = index" [class.active]="i==multiplyCarousel.activePoint" (click)="multiplyCarousel.moveTo(i)"></li>
    </ul>
  </ngu-carousel>`;

  carouselComponentCode = `import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit, AfterViewInit {
  constructor(private _cdr: ChangeDetectorRef) {}

  multiplImages = [
    '../assets/images/1.png',
    '../assets/images/2.png',
    '../assets/images/3.png',
    '../assets/images/4.png',
  ];

  images = ['../assets/images/5.png', '../assets/images/6.png'];
  
  public multiplyCarouselItems;
  public multiplyCarouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 1, lg: 4, all: 0 },
    speed: 1500,
    slide: 1,
    touch: true,
    loop: true,
    interval: { timing: 1500 },
  };

  ngOnInit() {
    this.multiplyCarouselItems = this.multiplImages.concat(this.multiplImages);
  }

  ngAfterViewInit() {
    this._cdr.detectChanges();
  }
}`;

  collapseCode = `<div [ngClass]="boxType">
  <button type="button"
          class="collapse-title"
          [ngClass]="{'collapsed': !isCollapsed}" (click)="isCollapsed = !isCollapsed"
          [attr.aria-expanded]="!isCollapsed" aria-controls="collapseBasic">
    <mat-icon *ngIf="isCollapsed; else remove">add</mat-icon>
    <ng-template #remove><mat-icon>remove</mat-icon></ng-template>
    <p>
      {{title}}
      <mat-icon>expand_more</mat-icon>
    </p>
  </button>
  <div id="collapseBasic" [collapse]="isCollapsed" class="card card-block card-header"><ng-content></ng-content></div>
</div>`;

  modalCode = `<button class="btn" [ngClass]="btnColor" (click)="openModal(modalTemplate)" *ngIf="!isVisible; else modalTemplate">{{btn}}</button>

<ng-template #modalTemplate>
  <div [ngClass]="modalClasses">
    <div class="ed-modal-header">
      <button class="lnr lnr-cross modal-close-btn" type="button" (click)="modalRef.hide()"></button>
      <span *ngIf="!header" [ngClass]="headerIcon"></span>
      <h4 class="bold-text modal-title">{{title}}</h4>
    </div>
    <div class="ed-modal-body">
      {{message}}
    </div>
    <div class="ed-modal-footer">
      <button class="btn btn-secondary" (click)="modalRef.hide()">Cancel</button>
      <button class="btn" [ngClass]="btnColor" (click)="modalRef.hide()">Ok</button>
    </div>
  </div>
</ng-template>`;

  panelsCode = `<app-panel title="Default panel"
           classes="col-12 col-md-12 col-lg-6"
           controls="true">
      {{panelText}}
</app-panel>`;

  popoversCode = `<div role="toolbar" class="btn-toolbar--center btn-toolbar">
  <button type="button" id="PopoverTop" class="btn btn-outline-secondary"
          popover="Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
          popoverTitle="Popover on Top"
          placement="top">Popover on Top</button>
</div>`;

  progressBarsCode = `<div class="progress-wrap">
  <progressbar [value]="80"></progressbar>
</div>`;

  rangeSlidersTemplateCode = `<ng5-slider value="0" (valueChange)="sliderEventHandler($event)"
  [options]="defaultSliderVarSet.options">
</ng5-slider>`;

  rangeSlidersComponentCode = `import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SlidersComponent implements OnInit {
  constructor() {}

  defaultSliderVarSet = {
    outputValue: 0,
    options: {
      floor: 0,
      ceil: 100,
    },
  };

  sliderEventHandler(value) {
    this.defaultSliderVarSet.outputValue = value;
  }

  ngOnInit() {}
}`;

  tabsCode = `<div class="tabs">
  <div class="tabs-wrap">
    <tabset>
      <tab heading="Sales">
        <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors
        towards. Enjoyment use tolerably dependent listening men. No peculiar in handsome together unlocked do
        by. Article concern joy anxious did picture sir her. Although desirous not recurred disposed off shy
        you numerous securing.</p>
      </tab>
      <tab heading="Statistic"><p>Direction has strangers now believing. Respect enjoyed gay far exposed
        parlors towards. Enjoyment use tolerably dependent listening men. No peculiar in handsome together
        unlocked do by.</p>
      </tab>
      <tab heading="Offers"><p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors
        towards. Enjoyment use tolerably dependent listening men. No peculiar in handsome together unlocked do
        by.</p>
      </tab>
      <tab heading="Refounds"><p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors
        towards. Enjoyment use tolerably dependent listening men. No peculiar in handsome together unlocked do
        by. Article concern joy anxious did picture sir her.</p>
      </tab>
    </tabset>
  </div>
  </div>`;

  tooltipsCode = `<div role="toolbar" class="btn-toolbar--center btn-toolbar">
  <button class="btn btn-outline-secondary"
          tooltip="Do you like dragons?"
          placement="bottom">Tooltip on Bottom</button>
</div>`;
  constructor() {}

  ngOnInit() {}
}
