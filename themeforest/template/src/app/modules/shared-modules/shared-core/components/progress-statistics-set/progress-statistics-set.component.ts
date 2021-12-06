import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-statistics-set',
  templateUrl: './progress-statistics-set.component.html',
  styleUrls: ['./progress-statistics-set.component.scss'],
})
export class ProgressStatisticsSetComponent implements OnInit {
  @Input() data;
  constructor() {}

  ngOnInit() {}
}
