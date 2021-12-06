import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsListComponent } from './components/components-list/components-list.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { InstallationComponent } from './components/installation/installation.component';
import { FileStructureComponent } from './components/file-structure/file-structure.component';
import { FormComponent } from './components/form/form.component';
import { ColorThemesComponent } from './components/color-themes/color-themes.component';
import { NavigationItemComponent } from './components/navigation-item/navigation-item.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ChangelogComponent } from './components/changelog/changelog.component';

const routes: Routes = [
  { path: '', redirectTo: 'introduction', pathMatch: 'full' },
  {
    path: '',
    component: DocumentationComponent,
    children: [
      { path: 'introduction', component: IntroductionComponent, data: { animation: 'Introduction' } },
      { path: 'installation', component: InstallationComponent, data: { animation: 'Installation' } },
      { path: 'file_structure', component: FileStructureComponent, data: { animation: 'FileStructure' } },
      { path: 'components', component: ComponentsListComponent, data: { animation: 'ComponentsList' } },
      { path: 'form', component: FormComponent, data: { animation: 'Form' } },
      { path: 'color_themes', component: ColorThemesComponent, data: { animation: 'ColorThemes' } },
      { path: 'navigation_item', component: NavigationItemComponent, data: { animation: 'NavigationItem' } },
      { path: 'resources', component: ResourcesComponent, data: { animation: 'Resources' } },
      { path: 'changelog', component: ChangelogComponent, data: { animation: 'Changelog' } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentationRoutingModule {}
