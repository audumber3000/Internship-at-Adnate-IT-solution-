import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubmitFormsService } from '../../../../../services/submit-forms.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { FilePreview } from '../../../../pages-examples/e-commerce/assets/drop-zone/drop-zone.component';
import {ThemeService} from '../../../../../services/theme.service';

@Component({
  selector: 'app-mail-compose',
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.scss'],
})
export class MailComposeComponent implements OnInit {
  emailForm: FormGroup;
  isDarkTheme: Observable<boolean>;
  editorOptions = { minHeight: '250px' };
  public fileList: Array<any> = [];
  @ViewChild('file', { static: false }) file;

  constructor(private themeService: ThemeService, private fb: FormBuilder, private submitService: SubmitFormsService,
              private location: Location) {
    this.emailForm = fb.group({
      addressee: [''],
      emailTitle: [''],
      htmlContent: [''],
      fileList: [],
    });
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.getThemeState();
  }

  onSubmit(formName) {
    this.submitService.submitForm(formName.value);
  }

  resetForm(formName) {
    formName.reset({}, { emitEvent: false });
    this.location.back();
  }

  addFiles() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    for (let i = 0, n = this.file.nativeElement.files.length; i < n; i++) {
      this.fileList.push(new FilePreview(this.file.nativeElement.files[i]));
    }
  }

  onFilesChange(fileList: FileList) {
    for (let i = 0, n = fileList.length; i < n; i++) {
      this.fileList.push(new FilePreview(fileList[i]));
    }
  }

  clearFilesList() {
    this.fileList = [];
    this.file.nativeElement.value = '';
    this.emailForm.get('fileList').reset();
  }
}
