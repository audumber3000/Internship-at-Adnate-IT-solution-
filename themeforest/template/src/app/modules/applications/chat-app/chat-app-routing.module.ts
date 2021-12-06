import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatAppComponent } from './components/chat-app/chat-app.component';
import { ChatDetailedComponent } from './components/chat-detailed/chat-detailed.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dialog/0',
  },
  {
    path: '',
    component: ChatAppComponent,
    children: [{ path: 'dialog/:id', component: ChatDetailedComponent }],
    data: { animation: 'ChatApp' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatAppRoutingModule {}
