import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  basicFormTemplateCode = `<form class="form" [formGroup]="reactiveForm" (ngSubmit)="onSubmit(reactiveForm)" [ngClass]="{'form--horizontal': horizontalForm}">
  <div class="form__form-group">
    <span class="form__form-group-label">Username</span>
    <div class="form__form-group-field">
      <div class="form__form-group-icon" *ngIf="showIcons"><mat-icon>person_outline</mat-icon></div>
      <input formControlName="username" type="text" placeholder="Name">
    </div>
  </div>
  <div class="form__form-group">
    <span class="form__form-group-label">E-mail</span>
    <div class="form__form-group-field">
      <div class="form__form-group-icon" *ngIf="showIcons"><mat-icon>mail</mat-icon></div>
      <input formControlName="email" type="email" placeholder="example@mail.com">
    </div>
  </div>
  <div role="toolbar" class="form__button-toolbar btn-toolbar">
    <button type="submit" class="btn btn-primary">Submit</button>
    <button type="button" class="btn btn-secondary" (click)="resetForm(reactiveForm)">Cancel</button>
  </div>
</form>`;
  basicFormComponentCode = `import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmitFormsService } from '../../../../../../services/submit-forms.service';

@Component({
  selector: 'app-form-layout-example',
  templateUrl: './form-layout-example.component.html',
  styleUrls: ['./form-layout-example.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormLayoutExampleComponent implements OnInit {
  @Input() horizontalForm = true;
  @Input() showIcons = false;
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder, private submitService: SubmitFormsService) {
    this.reactiveForm = fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    this.subscribeOnFormChanges(this.reactiveForm);
  }

  subscribeOnFormChanges(formName): void {
    formName.valueChanges.subscribe(val => {
      console.log(val);
    });
  }

  onSubmit(formName) {
    this.submitService.submitForm(formName.value);
  }

  resetForm(formName) {
    formName.reset({}, { emitEvent: false });
  }
}`;

  selectCode = `<ng-select [searchable]="false">
  <ng-option [value]="true">Yes</ng-option>
  <ng-option [value]="false">No</ng-option>
</ng-select>`;

  multySelectTemplateCode = `<ng-select [items]="multiSelectItems"
   [multiple]="true"
   [searchable]="false"
   placeholder="Select few of"
   clearAllText="Clear">
</ng-select>`;

  multyselectComponentCode = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  multiSelectItems = ['first', 'second'];

  constructor() {}

  ngOnInit() {}
}`;

  checkboxesCode = `<div class="controls-set colored-checkbox-set">
  <mat-checkbox class="medium-turquoise"></mat-checkbox>
</div>`;

  radioButtonsCode = `<mat-radio-group aria-label="Select an option">
  <mat-radio-button value="1" [checked]="checked">Radio button 1</mat-radio-button>
  <mat-radio-button value="2">Radio button 2</mat-radio-button>
</mat-radio-group>`;

  datePickersCode = `<input type="text"
placeholder="Select any date"
[bsConfig]="bsConfig"
bsDatepicker>`;

  timePickersCode = `<div class="form__form-group-field">
  <input placeholder="12hr format (default settings)" aria-label="12hr format" [ngxTimepicker]="default" readonly>
  <ngx-material-timepicker #default></ngx-material-timepicker>
  <div class="form__form-group-icon"><mat-icon>av_timer</mat-icon></div>
</div>`;

  dropzonesCode = `<app-drop-zone multiple="true"></app-drop-zone>`;

  colorPickers = `<div class="color-picker-field block-picker">
  <input #cpColor1
         [value]="color1"
         cpWidth="170px"
         [(colorPicker)]="color1"
         [cpPresetColors]="color2Preset"
         cpPresetLabel=""
         cpPosition="top"/>
  <div class="color-preview"[style.background]="color1" (click)="cpColor1.click()"></div>
</div>`;

  constructor() {}

  ngOnInit() {}
}
