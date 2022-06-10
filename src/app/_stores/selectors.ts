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

export const isLoadingSelector = createSelector(
  listingsFeatureSelector,
  (listingsState: ListingsState) => listingsState.isLoading
);

export const displayListingDetailsSelector = createSelector(
  listingsFeatureSelector,
  (listingsState: ListingsState) => listingsState.listingDetailsResponse
);

export const isOnDetailsPageSelector = createSelector(
  listingsFeatureSelector,
  (listingsState: ListingsState) => listingsState.isOnDetailsPage
);

export const isHeaderErrorSelector = createSelector(
  listingsFeatureSelector,
  (listingsState: ListingsState) => listingsState.isHeaderError
);

export const isListErrorSelector = createSelector(
  listingsFeatureSelector,
  (listingsState: ListingsState) => listingsState.isListError
);

export const isDetailsErrorSelector = createSelector(
  listingsFeatureSelector,
  (listingsState: ListingsState) => listingsState.isDetailsError
);
