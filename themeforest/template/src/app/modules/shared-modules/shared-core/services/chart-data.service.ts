import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  constructor() {}

  generateBarsData(dataPoints: number) {
    const results = [];

    for (let i = 0; i < dataPoints; i++) {
      results.push({
        name: Math.random()
          .toString(36)
          .substring(7),
        value: Math.floor(Math.random() * 5000 + 5000),
      });
    }

    return results;
  }
}
