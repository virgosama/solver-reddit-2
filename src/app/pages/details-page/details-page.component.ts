import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {AppState} from '../../_models/app-state';
import {select, Store} from '@ngrx/store';
import {displayListingDetailsSelector, isDetailsErrorSelector} from '../../_stores/selectors';
import {displayListingsAction} from '../../_stores/actions';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit, OnDestroy {

  sortBy = 'new';
  nextPageListings = '';
  prevPageListings = '';

  isDetailsError$: Observable<boolean | null>;
  listingDetailsSubscription: Subscription;
  listingSubject = {} as any;
  listingComments = [] as any[];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.loadListingDetails();
  }

  loadListingDetails(): void {
    this.isDetailsError$ = this.store.pipe(select(isDetailsErrorSelector));
    this.listingDetailsSubscription = this.store.pipe(select(displayListingDetailsSelector)).subscribe(response => {
      if (response) {
        const listingSubjectTemp = response[0].data.children[0].data;
        const listingCommentsTemp = response[1].data.children;
        this.listingSubject = {
          author: listingSubjectTemp.author,
          created: listingSubjectTemp.created,
          media: listingSubjectTemp.media,
          numComments: listingSubjectTemp.num_comments,
          score: listingSubjectTemp.score,
          selfText: listingSubjectTemp.selftext,
          thumbnail: listingSubjectTemp.thumbnail,
          title: listingSubjectTemp.title
        };

        this.listingComments = listingCommentsTemp.map((e:any) => (
          {
            author: e.data.author,
            created: e.data.created,
            media: e.data.media,
            replies: e.data.replies,
            score: e.data.score,
            selfText: e.data.body,
          }
        ));
      }
    });
  }

  onClickBack(): void {
    this.store.dispatch(displayListingsAction({sortBy: this.sortBy, after: this.nextPageListings, before: this.prevPageListings}));
  }

  ngOnDestroy(): void {
    this.listingDetailsSubscription.unsubscribe();
  }

}
