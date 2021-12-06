import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-forms-controls',
  templateUrl: './forms-controls.component.html',
  styleUrls: ['./forms-controls.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormsControlsComponent implements OnInit {
  checked = true;
  indeterminate = true;
  disabled = true;

  iconCheckboxSet = [
    { label: 'Checkbox 1', disabled: false, checked: true },
    { label: 'Checkbox 2', disabled: false, checked: false },
    { label: 'Disabled', disabled: true, checked: false },
    { label: 'Disabled & Checked', disabled: true, checked: true },
  ];

  iconRadioButtonSet_1 = [
    { label: 'Radio 1', disabled: false, checked: true },
    { label: 'Radio 2', disabled: false, checked: false },
  ];

  iconRadioButtonSet_2 = [
    { label: 'Disabled', disabled: true, checked: false },
    { label: 'Disabled & Checked', disabled: true, checked: true },
  ];

  constructor() {}

  ngOnInit() {}

  handleCheckboxClick(index) {
    this.iconCheckboxSet[index].checked = !this.iconCheckboxSet[index].checked;
  }
}
