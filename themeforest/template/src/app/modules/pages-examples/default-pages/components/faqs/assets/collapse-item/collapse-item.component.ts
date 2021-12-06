import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse-item',
  templateUrl: './collapse-item.component.html',
  styleUrls: ['./collapse-item.component.scss'],
})
export class CollapseItemComponent implements OnInit {
  @Input() title = '';
  @Input() boxType = '';
  isCollapsed = true;
  constructor() {}

  ngOnInit() {}
}
