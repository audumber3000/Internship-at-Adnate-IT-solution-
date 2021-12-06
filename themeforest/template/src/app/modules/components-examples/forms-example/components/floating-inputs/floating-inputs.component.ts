import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SubmitFormsService } from '../../../../../services/submit-forms.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-floating-inputs',
  templateUrl: './floating-inputs.component.html',
  styleUrls: ['./floating-inputs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FloatingInputsComponent implements OnInit {
  floatingForm: FormGroup;
  selectSet = [
    { value: 'one-0', viewValue: 'One' },
    { value: 'two-1', viewValue: 'Two' },
    { value: 'three-2', viewValue: 'Three' },
  ];

  constructor(private fb: FormBuilder, private submitService: SubmitFormsService) {
    this.floatingForm = fb.group({
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
