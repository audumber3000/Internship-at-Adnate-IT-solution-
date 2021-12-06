import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsExampleRoutingModule } from './forms-example-routing.module';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import { FloatingInputsComponent } from './components/floating-inputs/floating-inputs.component';
import { MaterialImportsModule } from '../../shared-modules/material-imports/material-imports.module';
import { FormsControlsComponent } from './components/forms-controls/forms-controls.component';
import { MaterialFormComponent } from './components/material-form/material-form.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { DndDirective } from './assets/dnd.directive';
import { DropZoneComponent } from './assets/components/drop-zone/drop-zone.component';
import { FormValidationComponent } from './components/form-validation';
import { FormValidationExampleComponent } from './components/form-validation';
import { MaskFormComponent } from './components/mask-form/mask-form.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormDropzoneComponent } from './components/form-dropzone/form-dropzone.component';
import { FormLayoutsComponent } from './components/form-layouts/form-layouts.component';
import { FormLayoutExampleComponent } from './components/form-layouts/assets/form-layout-example/form-layout-example.component';
import { FormPickesComponent } from './components/form-pickes/form-pickes.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { WizardFormComponent } from './components/wizard-form/wizard-form.component';

@NgModule({
  declarations: [
    BasicFormComponent,
    FloatingInputsComponent,
    FormsControlsComponent,
    MaterialFormComponent,
    FileUploadComponent,
    DndDirective,
    DropZoneComponent,
    FormValidationComponent,
    FormValidationExampleComponent,
    MaskFormComponent,
    FormDropzoneComponent,
    FormLayoutsComponent,
    FormLayoutExampleComponent,
    FormPickesComponent,
    WizardFormComponent,
  ],
  imports: [
    CommonModule,
    FormsExampleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatIconModule,
    MaterialImportsModule,
    NgxMaskModule.forRoot(),
    ColorPickerModule,
    BsDatepickerModule.forRoot(),
    NgxMaterialTimepickerModule,
  ],
})
export class FormsExampleModule {}
