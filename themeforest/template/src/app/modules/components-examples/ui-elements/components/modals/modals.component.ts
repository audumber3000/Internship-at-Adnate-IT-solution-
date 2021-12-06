import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
})
export class ModalsComponent implements OnInit {
  titleModals = 'Modals';
  descriptionModals = 'Use this elements, if you want to show some hints or additional information';

  constructor() {}

  ngOnInit() {}
}
