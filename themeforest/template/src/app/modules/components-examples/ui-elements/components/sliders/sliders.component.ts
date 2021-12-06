import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LabelType } from 'ng5-slider';

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

  twoWayBindingSliderVarSet = {
    value: 34,
    options: {
      floor: 0,
      ceil: 129,
    },
  };

  doubleSliderVarSet = {
    minValue: 350,
    maxValue: 635,
    options: {
      floor: 0,
      ceil: 1000,
      translate: (value, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return '<b>Min price:</b> $' + value;
          case LabelType.High:
            return '<b>Max price:</b> $' + value;
          default:
            return '$' + value;
        }
      },
    },
  };

  ticksSliderVarSet = {
    value: 34,
    options: {
      floor: 0,
      ceil: 100,
      showTicks: true,
      stepsArray: [
        { value: 0, legend: '0' },
        { value: 10, legend: '10' },
        { value: 20, legend: '20' },
        { value: 30, legend: '30' },
        { value: 40, legend: '40' },
        { value: 50, legend: '50' },
        { value: 60, legend: '60' },
        { value: 70, legend: '70' },
        { value: 80, legend: '80' },
        { value: 90, legend: '90' },
        { value: 100, legend: '100' },
      ],
    },
  };
  sliderEventHandler(value) {
    this.defaultSliderVarSet.outputValue = value;
  }

  ngOnInit() {}
}
