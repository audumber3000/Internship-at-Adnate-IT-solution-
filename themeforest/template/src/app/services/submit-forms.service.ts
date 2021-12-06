import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubmitFormsService {
  constructor() {}

  public submitForm(data) {
    // here is place you can send your form data to API
    alert(JSON.stringify(data, null, 4));
  }
}
