import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubmitFormsService } from '../../../../../services/submit-forms.service';

@Component({
  selector: 'app-mask-form',
  templateUrl: './mask-form.component.html',
  styleUrls: ['./mask-form.component.scss'],
})
export class MaskFormComponent implements OnInit {
  maskForm: FormGroup;
  constructor(private fb: FormBuilder, private submitService: SubmitFormsService) {
    this.maskForm = fb.group({
      phone: [''],
      phoneCode: [''],
      date: [''],
      dateValid: [''],
      currency: [''],
      licenceKey: [''],
      ipAddress: [''],
    });
  }

  ngOnInit() {
    this.subscribeOnFormChanges(this.maskForm);
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
