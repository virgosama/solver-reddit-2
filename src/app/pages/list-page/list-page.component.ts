import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {displayListingsAction} from '../../_stores/actions';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../_models/app-state';
import {Observable} from 'rxjs';
import {displayListingsSelector} from '../../_stores/selectors';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  sortBy = 'new';
  listingsResponse$ = null as Observable<any> | null;
  topicList = [] as any;

  constructor(private apiService: ApiService,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(displayListingsAction({sortBy: this.sortBy}));
    this.loadListings();
  }

  loadListings(): void {
    this.listingsResponse$ = this.store.pipe(select(displayListingsSelector));
    this.listingsResponse$.subscribe(response => {
      if (response) {
        this.topicList = response.map((e: any) => e.data);
      }
    });
    // this.apiService.getListings2('new').subscribe(e => {
    //   console.log(e);
    // });
    // this.apiService.getListings('new').subscribe(response => {
    //   console.log(response);
    // });
    // this.apiService.getNextPage('new').subscribe(response => {
    //   console.log(response);
    // });
    // this.apiService.getPreviousPage('new').subscribe(response => {
    //   console.log(response);
    // });
  }

}
