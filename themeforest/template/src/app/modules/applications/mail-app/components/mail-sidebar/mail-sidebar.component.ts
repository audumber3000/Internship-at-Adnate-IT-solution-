import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-mail-sidebar',
  templateUrl: './mail-sidebar.component.html',
  styleUrls: ['./mail-sidebar.component.scss'],
})
export class MailSidebarComponent implements OnInit {
  sidebarImg = `${environment.deployAssetsPath}/assets/images/sidebar_img.svg`;
  constructor() {}

  ngOnInit() {}
}
