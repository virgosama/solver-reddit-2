import {Component, OnDestroy, OnInit} from '@angular/core';
import {displayListingDetailsAction, displayListingsAction} from '../../_stores/actions';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../_models/app-state';
import {Observable, Subscription} from 'rxjs';
import {displayListingsSelector, isListErrorSelector, isLoadingSelector} from '../../_stores/selectors';
import {PageEvent} from '@angular/material/paginator';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit, OnDestroy {

  pageLength = 11;
  nextPageListings = '';
  prevPageListings = '';

  isListError$: Observable<boolean | null>;
  listingResponseSubscription: Subscription;
  listingsResponse$ = null as Observable<any> | null;

  constructor(private store: Store<AppState>,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadListings();
  }

  loadListings(): void {
    this.store.dispatch(displayListingsAction({
      after: this.nextPageListings,
      before: this.prevPageListings
    }));
    this.listingsResponse$ = this.store.pipe(select(displayListingsSelector));
    this.isListError$ = this.store.pipe(select(isListErrorSelector));
    this.listingResponseSubscription = this.store.pipe(select(displayListingsSelector)).subscribe(response => {
      if (response) {
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
    const url = this.route.snapshot.paramMap.get('subId');
    this.router.navigateByUrl(`${url}/${listingID}`);
    this.store.dispatch(displayListingDetailsAction({listingID}));
  }

  ngOnDestroy(): void {
    this.listingResponseSubscription.unsubscribe();
  }

}
