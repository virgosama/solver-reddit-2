import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../_models/app-state';
import {isLoadingSelector, isOnDetailsPageSelector} from '../../_stores/selectors';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {displayListingDetailsAction} from "../../_stores/actions";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  parameterId = '' as string;
  isDetailsPage$ = null as Observable<any> | null;
  isLoading$ = null as Observable<any> | null;

  constructor(private store: Store<AppState>,
              private route: ActivatedRoute,
              private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.parameterId = this.route.snapshot.paramMap.get('subId');
    const listingID = this.route.children[0]?.snapshot.paramMap.get('listingId');

    if (this.parameterId) {
      this.apiService.setApiUrl(this.parameterId);
    }
    if (listingID) {
      this.store.dispatch(displayListingDetailsAction({listingID}));
    }
    this.isDetailsPage$ = this.store.pipe(select(isOnDetailsPageSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

}
