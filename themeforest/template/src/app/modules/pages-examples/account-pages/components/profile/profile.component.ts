import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SubmitFormsService } from '../../../../../services/submit-forms.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { imageResoures } from '../../assets/image.resources';
import { ThemeService } from "../../../../../services/theme.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent implements OnInit {
  imageResoures = imageResoures;
  MaterialForm: FormGroup;
  isLightTheme: Observable<boolean>;
  
  constructor(private fb: FormBuilder, private submitService: SubmitFormsService, private themeService: ThemeService) {
    this.MaterialForm = fb.group({
      username: ['Larry Boom'],
      email: ['boom@mail.com'],
      url: [''],
      password: [''],
      textarea: [''],
    });
    this.isLightTheme = themeService.getThemeState();
  }


  ngOnInit() {}

  onSubmit(formName) {
    this.submitService.submitForm(formName.value);
  }

  resetForm(formName) {
    formName.reset({}, { emitEvent: false });
  }
}
