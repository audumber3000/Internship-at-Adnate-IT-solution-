import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmitFormsService } from '../../services/submit-forms.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  reactiveForm: FormGroup;
  showFormPassword = false;

  constructor(private fb: FormBuilder, private submitService: SubmitFormsService) {
    this.reactiveForm = fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
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
}
