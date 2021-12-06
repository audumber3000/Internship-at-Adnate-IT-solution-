import { TestBed } from '@angular/core/testing';

import { SubmitFormsService } from './submit-forms.service';

describe('SubmitFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmitFormsService = TestBed.get(SubmitFormsService);
    expect(service).toBeTruthy();
  });
});
