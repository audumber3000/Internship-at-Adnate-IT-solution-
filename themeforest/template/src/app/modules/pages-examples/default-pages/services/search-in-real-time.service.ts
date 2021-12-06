import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, map, share, switchMap } from 'rxjs/operators';
import { CdnjsResult } from '../assets/cdnjs.result';

@Injectable({
  providedIn: 'root',
})
export class SearchInRealTimeService {
  baseUrl = 'https://api.cdnjs.com/libraries';
  queryUrl = '?search=';

  constructor(private http: HttpClient) {}

  search(terms: Observable<string>): Observable<CdnjsResult> {
    return terms.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term => this.searchEntries(term)),
    );
  }

  searchEntries(term): Observable<CdnjsResult> {
    return this.http.get<CdnjsResult>(this.baseUrl + this.queryUrl + term).pipe(share());
  }
}
