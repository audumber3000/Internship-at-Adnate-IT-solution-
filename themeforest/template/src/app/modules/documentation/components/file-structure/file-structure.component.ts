import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-structure',
  templateUrl: './file-structure.component.html',
  styleUrls: ['./file-structure.component.scss'],
})
export class FileStructureComponent implements OnInit {
  mainFileStructure = `NgEasydev/
|——src
|  |——assets/
|  |  |——images/
|  |  |——fav.ico
|  |——app/
|  |  |——components/                 --lock screens, log in, register, page-not-found
|  |  |——modules/
|  |  |    |——applications/
|  |  |    |    |——chat-app/         --chat application
|  |  |    |    |——mail-app/         --mail app component
|  |  |    |——components-examples/
|  |  |    |    |——charts/           --components with different charts
|  |  |    |    |——forms-example/    --reactive-forms, materiual controls, form pickers
|  |  |    |    |——maps-example/     --google map, leaflet map
|  |  |    |    |——tables/           --material tables
|  |  |    |    |——ui-elements/      --ui elements
|  |  |    |——dashboards/            --default, e-commerce, fitness, etc
|  |  |    |——documentation/         --documentation of the template
|  |  |    |——landing/
|  |  |    |——main-layout/           --topbar, sideba, customizer
|  |  |    |——pages-examples/
|  |  |    |    |——account-pages/    --email confirmation, profile
|  |  |    |    |——default-pages/    --calendar, gallery, search-results, etc.
|  |  |    |    |——e-commerce/       --cart, catalog, product page, etc.
|  |  |    |——shared-modules/
|  |  |    |    |——material-imports/ --modile with different material modules imports
|  |  |    |    |——shared-core/      --shared module with reusable components like charts, calendar, panel, etc.
|  |  |——services/                   --theme service, submit forms helper service
|  |  |——app.component.html/
|  |  |——app.component.scss/
|  |  |——app.component.ts/
|  |  |——app.module.ts/
|  |  |——app-routing.module.ts/
|  |——scss/                          --styles
|——package.json
|——package-lock.json`;

  stylesStructure = `|——scss/
|  |——base/             --base styles
|  |——components/       --styles of components
|  |——generic/          --normalizing styles
|  |——settings/         --variables, themes
|  |——styles.scss       --main file`;
  constructor() {}

  ngOnInit() {}
}
