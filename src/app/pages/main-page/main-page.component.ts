import {Component, OnInit} from '@angular/core';
import {displaySubInfoAction} from '../../_stores/actions';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../_models/app-state';
import {displaySubInfoSelector} from '../../_stores/selectors';
import {Observable} from 'rxjs';
import {SubInfo} from '../../_models/subInfo';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  // subInfoResponse$ = {} as Observable<SubInfo> | {};

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    // this.store.dispatch(displaySubInfoAction());
    // this.loadSubInfo();
  }

  loadSubInfo(): void {
    // this.subInfoResponse$ = this.store.pipe(select(displaySubInfoSelector));
  }

}
