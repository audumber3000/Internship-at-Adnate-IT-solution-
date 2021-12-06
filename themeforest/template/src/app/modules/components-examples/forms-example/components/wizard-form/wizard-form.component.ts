import { Component, OnInit } from '@angular/core';
import { SubmitFormsService } from '../../../../../services/submit-forms.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-wizard-form',
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.scss'],
})
export class WizardFormComponent implements OnInit {
  stepNumber = 0;
  stepsCount = 3;

  reactiveForm: FormGroup;
  showFormPassword = false;

  constructor(private fb: FormBuilder, private submitService: SubmitFormsService) {
    this.reactiveForm = fb.group({
      username: [''],
      email: [''],
      url: [''],
      password: [''],
      showPassword: false,
      country: [''],
      city: [''],
      strName: [''],
      bldName: [''],
      zipCode: [''],
      plan: [''],
      emailNotifications: [true],
      phoneNotifications: [false],
    });
  }

  ngOnInit() {
    this.subscribeOnFormChanges(this.reactiveForm);

    this.reactiveForm.get('showPassword').valueChanges.subscribe(val => {
      this.showFormPassword = val;
    });
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

  nextStep() {
    if (this.stepNumber < this.stepsCount) {
      this.stepNumber++;
      if (this.stepNumber === this.stepsCount - 1) {
      }
    }
  }

  backStep() {
    if (this.stepNumber > 0) {
      this.stepNumber--;
      if (this.stepNumber === 0) {
      }
    }
  }
}
