import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmitFormsService } from '../../services/submit-forms.service';
import {Observable} from 'rxjs';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-log-in-photo',
  templateUrl: './log-in-photo.component.html',
  styleUrls: ['./log-in-photo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LogInPhotoComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  reactiveForm: FormGroup;
  showFormPassword = false;

  constructor(private themeService: ThemeService, private fb: FormBuilder, private submitService: SubmitFormsService) {
    this.reactiveForm = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      showPassword: false,
      rememberMe: [false],
    });
  }

  ngOnInit() {
    this.subscribeOnFormChanges(this.reactiveForm);

    this.isDarkTheme = this.themeService.getThemeState();

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
