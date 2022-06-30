import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {displayListingsAction} from "../../_stores/actions";
import {AppState} from "../../_models/app-state";
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sort-options',
  templateUrl: './sort-options.component.html',
  styleUrls: ['./sort-options.component.scss']
})
export class SortOptionsComponent implements OnInit, OnDestroy {

  selectedOption = '';
  sortOptions = [
    'best',
    'controversial',
    'hot',
    'new',
    'rising',
    'top'
  ];

  subscription: Subscription;

  constructor(private apiService: ApiService,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.subscription = this.apiService.currentSort.subscribe(sortBy => {
      this.selectedOption = sortBy;
      this.store.dispatch(displayListingsAction({
        after: '',
        before: ''
      }));
    });
  }

  onClickSort(selected: string): void {
    this.apiService.changeSort(selected);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
