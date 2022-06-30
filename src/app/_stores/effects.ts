import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {
  displayListingDetailsAction, displayListingDetailsFailedAction,
  displayListingDetailsSuccessAction,
  displayListingsAction,
  displayListingsFailedAction,
  displayListingsSuccessAction,
  displaySubInfoAction, displaySubInfoFailedAction,
  displaySubInfoSuccessAction
} from './actions';
import {ApiService} from '../services/api.service';
import {SubInfo} from '../_models/subInfo';

@Injectable()
export class MapEffect {
  displayListings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(displayListingsAction),
      switchMap(response => {
        return this.apiService.getListings(response.after, response.before).pipe(
          map((listingsResponse: any) => {
            return displayListingsSuccessAction({listingsResponse});
          }),

          catchError(() => {
            return of(displayListingsFailedAction());
          })
        );
      })
    )
  );

  displaySubInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(displaySubInfoAction),
      switchMap(() => {
        return this.apiService.getSubInfo().pipe(
          map((subInfoResponse: SubInfo) => {
            return displaySubInfoSuccessAction({subInfoResponse});
          }),

          catchError(() => {
            return of(displaySubInfoFailedAction());
          })
        );
      })
    )
  );

  displayListingDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(displayListingDetailsAction),
      switchMap(response => {
        return this.apiService.getListingDetails(response.listingID).pipe(
          map((listingDetailsResponse: any) => {
            return displayListingDetailsSuccessAction({listingDetailsResponse});
          }),
          catchError(() => {
            return of(displayListingDetailsFailedAction());
          })
        );
      })
    )
  );


  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) {
  }
}
