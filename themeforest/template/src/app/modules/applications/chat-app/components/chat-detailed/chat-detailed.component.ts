import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ChatDataService } from '../../services/chat-data.service';
import { ChatData } from '../../assets/chat-data';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SidebarCollapseStateService } from '../../services/sidebar-collapse-state.service';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-chat-detailed',
  templateUrl: './chat-detailed.component.html',
  styleUrls: ['./chat-detailed.component.scss'],
})
export class ChatDetailedComponent implements OnInit {
  currentUser = {
    userName: 'dragonKing',
    name: 'Roman Johanson',
    avatar: `${environment.deployAssetsPath}/assets/images/ava.png`,
  };

  chatDetails$: Observable<ChatData>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chatDataService: ChatDataService,
    private sidebarStateService: SidebarCollapseStateService,
  ) {
    this.chatDetails$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = +params.get('id');
        return this.chatDataService.getChatDetails(id);
      }),
    );
  }

  ngOnInit() {}
}
