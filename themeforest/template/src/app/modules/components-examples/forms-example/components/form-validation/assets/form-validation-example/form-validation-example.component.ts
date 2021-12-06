import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, transition, useAnimation } from '@angular/animations';
import { SubmitFormsService } from '../../../../../../../services/submit-forms.service';
import { bounceInDown, bounceOutUp } from 'ng-animate';
import { customBounceDown, customBounceUp } from '../animations/animations';

const urlReg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

@Component({
  selector: 'app-form-validation-example',
  templateUrl: './form-validation-example.component.html',
  styleUrls: ['./form-validation-example.component.scss'],
  animations: [
    trigger('bounce', [
      transition('void => *', useAnimation(customBounceDown.animation, customBounceDown.options)),
      transition('* => void', useAnimation(customBounceUp.animation, customBounceUp.options)),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class FormValidationExampleComponent implements OnInit {
  @Input() horizontalForm = true;
  @Input() showErrorAbove = false;
  reactiveForm: FormGroup;
  showFormPassword = false;

  validationMessages = {
    username: 'Username field shouldn’t be empty',
    url: 'Url field shouldn’t be empty',
    urlInvalid: 'This is not valid url',
    email: 'Email field shouldn’t be empty',
    emailInvalid: 'This is not valid email',
    password: 'Password field shouldn’t be empty',
    passwordLength: 'Password should be more than 6 symbols',
    selectOption: 'Please select the option',
  };

  constructor(private fb: FormBuilder, private submitService: SubmitFormsService) {
    this.reactiveForm = fb.group({
      username: ['', [Validators.required]],
      url: ['', [Validators.required, Validators.pattern(urlReg)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      showPassword: false,
      selectOption: ['', [Validators.required]],
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
    if (formName.valid) {
      this.submitService.submitForm(formName.value);
    } else {
      for (const inner in formName.controls) {
        if (formName.controls.hasOwnProperty(inner)) {
          formName.get(inner).markAsTouched();
        }
      }
    }
  }

  resetForm(formName) {
    formName.reset({}, { emitEvent: false });
  }

  get username() {
    return this.reactiveForm.get('username');
  }

  get url() {
    return this.reactiveForm.get('url');
  }

  get email() {
    return this.reactiveForm.get('email');
  }

  get password() {
    return this.reactiveForm.get('password');
  }

  get selectOption() {
    return this.reactiveForm.get('selectOption');
  }
}
