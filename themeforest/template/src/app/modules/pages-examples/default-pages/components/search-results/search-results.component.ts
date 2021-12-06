import { Component, OnInit } from '@angular/core';
import { SearchInRealTimeService } from '../../services/search-in-real-time.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cdnjs } from '../../assets/cdnjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  searchTerm$ = new BehaviorSubject<string>('bootstrap');
  searchResults$: Observable<Cdnjs[]>;
  searchTotal$: Observable<number>;

  // paginator settings
  currentPage = 1;
  itemsPerPage = 10;

  constructor(private searchService: SearchInRealTimeService) {
    this.searchResults$ = this.searchService.search(this.searchTerm$).pipe(map(val => val.results));
    this.searchTotal$ = this.searchService.search(this.searchTerm$).pipe(map(val => val.total));
  }

  ngOnInit() {}

  onSubmit($event) {
    $event.preventDefault();
  }
}
