import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SubmitFormsService } from '../../../../../services/submit-forms.service';

export class FilePreview {
  preview;
  constructor(file) {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event: ProgressEvent) => {
        this.preview = event.target['result'];
      };
    }
  }
}

@Component({
  selector: 'app-drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.scss'],
})
export class DropZoneComponent implements OnInit {
  @Input() customHeight = false;
  @Input() multiple = false;
  @ViewChild('file', { static: false }) file;
  public fileList: Array<any> = [];

  constructor(private submitService: SubmitFormsService) {}

  ngOnInit() {}

  addFiles() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    for (let i = 0, n = this.file.nativeElement.files.length; i < n; i++) {
      this.fileList.push(new FilePreview(this.file.nativeElement.files[i]));
    }
  }

  onFilesChange(fileList: FileList) {
    if (this.multiple) {
      for (let i = 0, n = fileList.length; i < n; i++) {
        this.fileList.push(new FilePreview(fileList[i]));
      }
    } else {
      this.fileList.push(new FilePreview(fileList[0]));
    }
  }

  deleteImage(index) {
    this.fileList.splice(index, 1);
    this.file.nativeElement.value = '';
  }

  clearDropZone() {
    this.fileList = [];
    this.file.nativeElement.value = '';
  }

  onSubmit() {
    this.submitService.submitForm(this.fileList);
  }
}
