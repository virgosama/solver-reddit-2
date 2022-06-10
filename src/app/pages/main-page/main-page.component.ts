import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../_models/app-state';
import {isDetailsSelector, isLoadingSelector} from '../../_stores/selectors';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  isDetailsPage$ = null as Observable<any> | null;
  isLoading$ = null as Observable<any> | null;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.isDetailsPage$ = this.store.pipe(select(isDetailsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

}
