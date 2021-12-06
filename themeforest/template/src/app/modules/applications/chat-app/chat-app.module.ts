import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ChatAppRoutingModule } from './chat-app-routing.module';
import { ChatAppComponent } from './components/chat-app/chat-app.component';
import { MaterialImportsModule } from '../../shared-modules/material-imports/material-imports.module';
import { ChatDetailedComponent } from './components/chat-detailed/chat-detailed.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [ChatAppComponent, ChatDetailedComponent],
  imports: [CommonModule, FormsModule, ChatAppRoutingModule, MaterialImportsModule, PerfectScrollbarModule],
})
export class ChatAppModule {}
