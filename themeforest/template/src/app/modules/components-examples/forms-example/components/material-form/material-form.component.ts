import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubmitFormsService } from '../../../../../services/submit-forms.service';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MaterialFormComponent implements OnInit {
  MaterialForm: FormGroup;
  selectSet = [
    { value: 'one-0', viewValue: 'One' },
    { value: 'two-1', viewValue: 'Two' },
    { value: 'three-2', viewValue: 'Three' },
  ];
  constructor(private fb: FormBuilder, private submitService: SubmitFormsService) {
    this.MaterialForm = fb.group({
      username: [''],
      email: [''],
      url: [''],
      password: [''],
      select: [''],
      textarea: [''],
    });
  }

  ngOnInit() {}

  onSubmit(formName) {
    this.submitService.submitForm(formName.value);
  }

  resetForm(formName) {
    formName.reset({}, { emitEvent: false });
  }
}
