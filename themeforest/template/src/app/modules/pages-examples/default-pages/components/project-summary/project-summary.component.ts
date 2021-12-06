import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SummaryDataService } from '../../services/summary-data.service';
import { Observable } from 'rxjs';
import { ProjectTeamMember } from '../../assets/project.team.member';
import { ChartOptions } from 'chart.js';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectSummaryComponent implements OnInit {
  isRefreshing = false;

  projectTeam$: Observable<ProjectTeamMember[]>;
  tasksChartData$: Observable<any>;
  bugsChartData$: Observable<any>;

  totalBugs$: Observable<any>;
  taskStatistic$: Observable<any>;

  public taskStatLabels = ['New Tasks', 'Done Tasks', 'High Priority Tasks'];
  public bugsStatLabels = ['Minor Bugs', 'Resolved Bugs', 'Critical Bugs'];

  public chartType = 'doughnut';
  public chartOptions: ChartOptions = {
    legend: {
      position: 'right',
    },
    cutoutPercentage: 75,
  };

  public chartColors = [{ backgroundColor: ['#4ce1b6', '#70bbfd', '#ff4861'] }];

  constructor(private summaryData: SummaryDataService) {}

  ngOnInit() {
    this.projectTeam$ = this.summaryData.getProjectTeam();
    this.tasksChartData$ = this.summaryData.getTastStatistic().pipe(
      map(data => {
        const result = [];
        Object.keys(data).forEach(key => result.push(data[key]));
        return result;
      }),
    );

    this.bugsChartData$ = this.summaryData.getBugStatistic().pipe(
      map(data => {
        const result = [];
        Object.keys(data).forEach(key => result.push(data[key]));
        return result;
      }),
    );

    this.totalBugs$ = this.summaryData
      .getBugStatistic()
      .pipe(map(data => Object.keys(data).reduce((sum, current) => sum + data[current], 0)));

    this.taskStatistic$ = this.summaryData.getTastStatistic().pipe(
      map(data => {
        const totalTasks = Object.keys(data).reduce((sum, current) => sum + data[current], 0);
        const completedPercent = Math.floor((data.doneTasks / totalTasks) * 100);
        return {
          totalTasks,
          completedPercent,
        };
      }),
    );
  }

  updateSummary() {
    this.isRefreshing = true;
    this.summaryData.updateStatistics().subscribe(() => (this.isRefreshing = false));
  }
}
