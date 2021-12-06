import { Component, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { concat, filter, first, map, timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.scss'],
})
export class ExpandComponent implements OnInit {
  private buttonClick$ = new Subject<Event>();

  constructor() {}

  ngOnInit() {
    const Xms = 5000;
    const click$ = this.buttonClick$.pipe(timeInterval());
    const firstClick$ = click$.pipe(
      first(),
      map(x => {
        return x.value;
      }),
    );

    const res$ = firstClick$.pipe(
      concat(
        click$.pipe(
          filter(x => {
            return x.interval > Xms;
          }),
          map(x => {
            return x.value;
          }),
        ),
      ),
    );

    res$.subscribe(x => {});
  }

  handleClick($event) {
    this.buttonClick$.next($event);
  }
}
