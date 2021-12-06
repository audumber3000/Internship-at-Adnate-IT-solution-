import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { ChatDataService } from '../../services/chat-data.service';
import { ChatPreview } from '../../assets/chat-data';
import { Observable } from 'rxjs';
import { SidebarCollapseStateService } from '../../services/sidebar-collapse-state.service';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.scss'],
})
export class ChatAppComponent implements OnInit {
  mode = new FormControl('side');
  sidebarOpened$: Observable<boolean>;
  chatsPreviewData$: Observable<ChatPreview[]>;

  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 1024) {
      this.sidebarStateService.closeSidebar();
      this.mode = new FormControl('over');
    } else {
      this.sidebarStateService.openSidebar();
      this.mode = new FormControl('side');
    }
  }

  constructor(private chatDataService: ChatDataService, private sidebarStateService: SidebarCollapseStateService) {
    this.chatsPreviewData$ = chatDataService.getChatsPreview();
    this.sidebarOpened$ = sidebarStateService.getSidebarState();
  }

  ngOnInit() {}

  closeSidebar() {
    this.sidebarStateService.closeSidebar();
  }

  closeSidebarMobile() {
    if (this.mode.value === 'over') {
      this.sidenav.close();
    }
  }
}
