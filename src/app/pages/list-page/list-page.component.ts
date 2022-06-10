import {Component, OnDestroy, OnInit} from '@angular/core';
import {displayListingDetailsAction, displayListingsAction} from '../../_stores/actions';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../_models/app-state';
import {Observable, Subscription} from 'rxjs';
import {displayListingsSelector, isLoadingSelector} from '../../_stores/selectors';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit, OnDestroy {

  sortBy = 'new';
  pageLength = 11;
  nextPageListings = '';
  prevPageListings = '';
  listingResponseSubscription: Subscription;
  listingsResponse$ = null as Observable<any> | null;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.loadListings();
  }

  loadListings(): void {
    this.store.dispatch(displayListingsAction({sortBy: this.sortBy, after: this.nextPageListings, before: this.prevPageListings}));
    this.listingsResponse$ = this.store.pipe(select(displayListingsSelector));
    this.listingResponseSubscription = this.store.pipe(select(displayListingsSelector)).subscribe(response => {
      if (response) {
        console.log(response);
        this.nextPageListings = response.after || '';
        this.prevPageListings = response.before || '';
      }
    });
  }

  onPageChange(pageEvent: PageEvent): void {
    window.scrollTo(0, 0);
    const {pageIndex, previousPageIndex} = pageEvent;
    if (pageIndex > previousPageIndex) {
      this.prevPageListings = '';
      this.pageLength += 10;
    } else {
      this.pageLength -= 10;
      this.nextPageListings = '';
    }
    this.loadListings();
  }

  onClickReadMore(listingID: string): void {
    this.store.dispatch(displayListingDetailsAction({listingID}));

  }

  ngOnDestroy(): void {
    this.listingResponseSubscription.unsubscribe();
  }

}
