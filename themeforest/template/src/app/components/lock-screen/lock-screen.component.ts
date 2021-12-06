import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmitFormsService } from '../../services/submit-forms.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-lock-screen',
  templateUrl: './lock-screen.component.html',
  styleUrls: ['./lock-screen.component.scss'],
})
export class LockScreenComponent implements OnInit {
  avatarImg1 = `${environment.deployAssetsPath}/assets/images/11.png`;
  reactiveForm: FormGroup;
  showFormPassword = false;
  constructor(private fb: FormBuilder, private submitService: SubmitFormsService) {
    this.reactiveForm = fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      showPassword: false,
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
