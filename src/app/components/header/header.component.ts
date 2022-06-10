import {Component, OnInit} from '@angular/core';
import {displaySubInfoAction} from '../../_stores/actions';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../_models/app-state';
import {displaySubInfoSelector} from '../../_stores/selectors';
import {Observable} from 'rxjs';
import {SubInfo} from '../../_models/subInfo';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  subInfoResponse$?: Observable<SubInfo | null>;

  constructor(private store: Store<AppState>,
              private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.loadSubInfo();
  }

  loadSubInfo(): void {
    this.store.dispatch(displaySubInfoAction());
    this.subInfoResponse$ = this.store.pipe(select(displaySubInfoSelector));
    this.apiService.getSubInfo().subscribe(e => {
    });
  }

}
