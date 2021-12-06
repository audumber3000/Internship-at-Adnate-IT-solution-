import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { FormsControlsComponent } from './components/forms-controls/forms-controls.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FloatingInputsComponent } from './components/floating-inputs/floating-inputs.component';
import { FormDropzoneComponent } from './components/form-dropzone/form-dropzone.component';
import { FormLayoutsComponent } from './components/form-layouts/form-layouts.component';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { MaskFormComponent } from './components/mask-form/mask-form.component';
import { FormPickesComponent } from './components/form-pickes/form-pickes.component';
import { MaterialFormComponent } from './components/material-form/material-form.component';
import { WizardFormComponent } from './components/wizard-form/wizard-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/basic_form', pathMatch: 'full' },
  { path: 'basic_form', component: BasicFormComponent, data: { animation: 'BasicForm' } },
  { path: 'check_form_controls', component: FormsControlsComponent, data: { animation: 'FormsControls' } },
  { path: 'file_upload', component: FileUploadComponent, data: { animation: 'FileUpload' } },
  { path: 'floating_labels_form', component: FloatingInputsComponent, data: { animation: 'FloatingInputs' } },
  { path: 'form_dropzone', component: FormDropzoneComponent, data: { animation: 'FormDropzone' } },
  { path: 'form_layouts', component: FormLayoutsComponent, data: { animation: 'FormLayouts' } },
  { path: 'form_pickers', component: FormPickesComponent, data: { animation: 'FormPickes' } },
  { path: 'form_validation', component: FormValidationComponent, data: { animation: 'FormValidation' } },
  { path: 'mask_form', component: MaskFormComponent, data: { animation: 'MaskForm' } },
  { path: 'material_form', component: MaterialFormComponent, data: { animation: 'MaterialForm' } },
  { path: 'wizard_form', component: WizardFormComponent, data: { animation: 'WizardForm' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsExampleRoutingModule {}
