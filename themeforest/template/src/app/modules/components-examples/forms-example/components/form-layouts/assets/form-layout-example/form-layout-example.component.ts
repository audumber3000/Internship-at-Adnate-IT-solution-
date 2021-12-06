import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmitFormsService } from '../../../../../../../services/submit-forms.service';

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
  showFormPassword = false;

  constructor(private fb: FormBuilder, private submitService: SubmitFormsService) {
    this.reactiveForm = fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      url: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      showPassword: false,
      rememberMe: [false],
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
}
