import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubmitFormsService } from '../../../../../services/submit-forms.service';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  horizontalForm: FormGroup;
  verticalForm: FormGroup;
  showHorizontalFormPassword = false;
  showVerticalFormPassword = false;

  multiSelectItems = ['first', 'second'];

  constructor(private fb: FormBuilder, private submitService: SubmitFormsService) {
    this.horizontalForm = fb.group({
      defaultInput: [''],
      disableInput: [{ value: '', disabled: true }],
      email: [''],
      password: [''],
      showPassword: false,
      leftIcon: [''],
      rightIcon: [''],
      descriptionInput: [''],
      agree: [''],
      multiSelect: [''],
      textarea: [''],
    });

    this.verticalForm = fb.group({
      defaultInput: [''],
      disableInput: [{ value: '', disabled: true }],
      email: [''],
      password: [''],
      showPassword: false,
      leftIcon: [''],
      rightIcon: [''],
    });
  }

  ngOnInit() {
    this.subscribeOnFormChanges(this.horizontalForm);
    this.subscribeOnFormChanges(this.verticalForm);

    this.horizontalForm.get('showPassword').valueChanges.subscribe(val => {
      this.showHorizontalFormPassword = val;
    });

    this.verticalForm.get('showPassword').valueChanges.subscribe(val => {
      this.showVerticalFormPassword = val;
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
}
