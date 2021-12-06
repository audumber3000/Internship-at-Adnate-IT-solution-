import { Injectable } from '@angular/core';
import { exampleProjectTeam, ProjectTeamMember } from '../assets/project.team.member';
import { BehaviorSubject, Observable, of, timer } from 'rxjs';
import { exampleTaskStatistic, TaskStatistic } from '../assets/task.statistic';
import { BugStatistic, exampleBugStatistic } from '../assets/bug.statistic';
import { share, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SummaryDataService {
  projectTeamData: BehaviorSubject<ProjectTeamMember[]>;
  taskStatistics: BehaviorSubject<TaskStatistic>;
  bugStatistics: BehaviorSubject<BugStatistic>;

  constructor() {
    this.projectTeamData = new BehaviorSubject<ProjectTeamMember[]>(exampleProjectTeam);
    this.taskStatistics = new BehaviorSubject<TaskStatistic>(exampleTaskStatistic);
    this.bugStatistics = new BehaviorSubject<BugStatistic>(exampleBugStatistic);
  }

  getProjectTeam(): Observable<ProjectTeamMember[]> {
    return this.projectTeamData.asObservable();
  }

  getTastStatistic(): Observable<TaskStatistic> {
    return this.taskStatistics.asObservable().pipe(share());
  }

  getBugStatistic(): Observable<BugStatistic> {
    return this.bugStatistics.asObservable().pipe(share());
  }

  updateStatistics(): Observable<any> {
    return timer(2500).pipe(
      tap(val => {
        this.taskStatistics.next(this.randomizeObjectData(exampleTaskStatistic, 0, 150));
        this.bugStatistics.next(this.randomizeObjectData(exampleBugStatistic, 0, 250));
      }),
    );
  }

  randomizeObjectData(obj, min, max) {
    const keys = Object.keys(obj).filter(key => obj[key] !== null);

    for (const key of keys) {
      if (key) {
        obj[key] = Math.floor(Math.random() * (max - min) + min);
      }
    }

    return obj;
  }
}
