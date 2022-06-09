import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {
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
        return this.apiService.getListings(response.sortBy).pipe(
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

  // displayApartmentDetails$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(displayApartmentDetailsAction),
  //     switchMap(response => {
  //       return this.apiService.getApartmentDetails(response.propertyID).pipe(
  //         map((apartmentDetails: ApartmentDataDetails) => {
  //           return displayApartmentDetailsSuccessAction({apartmentDetails});
  //         }),
  //         catchError(() => {
  //           return of(displayApartmentDetailsFailedAction());
  //         })
  //       );
  //     })
  //   )
  // );


  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) {
  }
}
