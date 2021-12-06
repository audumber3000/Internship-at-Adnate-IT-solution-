import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmitFormsService } from '../../../../../services/submit-forms.service';

@Component({
  selector: 'app-form-layouts',
  templateUrl: './form-layouts.component.html',
  styleUrls: ['./form-layouts.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormLayoutsComponent implements OnInit {
  reactiveForm: FormGroup;
  constructor(private fb: FormBuilder, private submitService: SubmitFormsService) {
    this.reactiveForm = fb.group({
      firstName: [''],
      lastName: [''],
      birthDate: [''],
      gender: ['0'],
      country: [''],
      city: [''],
      zipCode: [''],
    });
  }

  ngOnInit() {
    this.subscribeOnFormChanges(this.reactiveForm);
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
    formName.reset({ gender: '0' }, { emitEvent: false });
  }
}
