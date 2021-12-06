import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard_default',
        loadChildren: () =>
          import('../dashboards/dashboard-default/dashboard-default.module').then(m => m.DashboardDefaultModule),
      },
      {
        path: 'dashboard_ecommerce',
        loadChildren: () =>
          import('../dashboards/dashboard-ecommerce/dashboard-ecommerce.module').then(m => m.DashboardEcommerceModule),
      },
      {
        path: 'dashboard_fitness',
        loadChildren: () =>
          import('../dashboards/dashboard-fitness/dashboard-fitness.module').then(m => m.DashboardFitnessModule),
      },
      {
        path: 'dashboard_crypto',
        loadChildren: () =>
          import('../dashboards/dashboard-crypto/dashboard-crypto.module').then(m => m.DashboardCryptoModule),
      },
      {
        path: 'dashboard_booking',
        loadChildren: () =>
          import('../dashboards/dashboard-booking/dashboard-booking.module').then(m => m.DashboardBookingModule),
      },
      {
        path: 'dashboard_mobile_app',
        loadChildren: () =>
          import('../dashboards/dashboard-mobile-app/dashboard-mobile-app.module').then(
            m => m.DashboardMobileAppModule,
          ),
      },

      {
        path: 'ui',
        loadChildren: () =>
          import('../components-examples/ui-elements/ui-elements.module').then(m => m.UIElementsModule),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('../components-examples/forms-example/forms-example.module').then(m => m.FormsExampleModule),
      },
      {
        path: 'tables',
        loadChildren: () => import('../components-examples/tables/tables.module').then(m => m.TablesModule),
      },
      {
        path: 'charts',
        loadChildren: () => import('../components-examples/charts/charts.module').then(m => m.ChartsModule),
      },
      {
        path: 'maps',
        loadChildren: () =>
          import('../components-examples/maps-example/maps-example.module').then(m => m.MapsExampleModule),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../pages-examples/account-pages/account-pages.module').then(m => m.AccountPagesModule),
      },
      {
        path: 'e-commerce',
        loadChildren: () => import('../pages-examples/e-commerce/e-commerce.module').then(m => m.ECommerceModule),
      },
      {
        path: 'default_pages',
        loadChildren: () =>
          import('../pages-examples/default-pages/default-pages.module').then(m => m.DefaultPagesModule),
      },
      {
        path: 'documentation',
        loadChildren: () => import('../documentation/documentation.module').then(m => m.DocumentationModule),
      },

      {
        path: 'mail_app',
        loadChildren: () => import('../applications/mail-app/mail-app.module').then(m => m.MailAppModule),
      },
      {
        path: 'chat_app',
        loadChildren: () => import('../applications/chat-app/chat-app.module').then(m => m.ChatAppModule),
      },
      {
        path: 'todo_app',
        loadChildren: () => import('../applications/todo-app/todo-app.module').then(m => m.TodoAppModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
