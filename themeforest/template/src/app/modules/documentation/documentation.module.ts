import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ComponentsListComponent } from './components/components-list/components-list.component';
import { InstallationComponent } from './components/installation/installation.component';
import { FileStructureComponent } from './components/file-structure/file-structure.component';
import { FormComponent } from './components/form/form.component';
import { ColorThemesComponent } from './components/color-themes/color-themes.component';
import { NavigationItemComponent } from './components/navigation-item/navigation-item.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ChangelogComponent } from './components/changelog/changelog.component';
import { MaterialImportsModule } from '../shared-modules/material-imports/material-imports.module';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    DocumentationComponent,
    IntroductionComponent,
    ComponentsListComponent,
    InstallationComponent,
    FileStructureComponent,
    FormComponent,
    ColorThemesComponent,
    NavigationItemComponent,
    ResourcesComponent,
    ChangelogComponent,
  ],
  imports: [CommonModule, DocumentationRoutingModule, HighlightModule, MaterialImportsModule ],
})
export class DocumentationModule {}
