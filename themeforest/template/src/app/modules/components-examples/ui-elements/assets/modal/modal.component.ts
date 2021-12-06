import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title = '';
  @Input() message = '';
  @Input() color = '';
  @Input() colored = false;
  @Input() header = false;
  @Input() btn = '';
  btnColor = '';
  headerIcon = {};
  isVisible = false;

  isActive = false;
  modalClasses = {};
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: this.getModalClasses(this.modalClasses) }),
    );
  }

  private getModalClasses(classes) {
    let classesString = '';
    for (let key in classes) {
      if (classes[key]) {
        classesString += ' ' + key;
      }
    }
    return classesString;
  }

  ngOnInit() {
    this.modalClasses['modal-dialog-' + this.color] = true;
    this.modalClasses['modal-dialog-colored'] = this.colored;
    this.modalClasses['modal-dialog-header'] = this.header;

    this.headerIcon = {
      lnr: true,
      'modal-title-icon': true,
      'lnr-pushpin': this.color === 'primary',
      'lnr-thumbs-up': this.color === 'success',
      'lnr-flag': this.color === 'warning',
      'lnr-cross-circle': this.color === 'danger',
    };
    this.btnColor = 'btn-' + this.color;
  }

  toggleModal() {}
}
