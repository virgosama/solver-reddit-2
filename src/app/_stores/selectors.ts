import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ListingsState} from '../_models/listings-state';
import {AppState} from '../_models/app-state';

export const listingsFeatureSelector = createFeatureSelector<
  AppState,
  ListingsState
  >('listings');

export const displayListingsSelector = createSelector(
  listingsFeatureSelector,
  (listingsState: ListingsState) => listingsState.listingsResponse
);

export const displaySubInfoSelector = createSelector(
  listingsFeatureSelector,
  (listingsState: ListingsState) => listingsState.subInfoResponse
);

// export const isLoadingSelector = createSelector(
//   mapFeatureSelector,
//   (mapState: ListingsState) => mapState.isLoading
// );
//
// export const displayListingDetailsSelector = createSelector(
//   mapFeatureSelector,
//   (mapState: ListingsState) => mapState.listingDetailsResponse
// );
//
// export const isDetailsSelector = createSelector(
//   mapFeatureSelector,
//   (mapState: ListingsState) => mapState.isDetails
// );
