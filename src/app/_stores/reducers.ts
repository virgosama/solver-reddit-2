import {createReducer, on, Action} from '@ngrx/store';
import {ListingsState} from '../_models/listings-state';
import {
  displayListingDetailsAction,
  displayListingDetailsFailedAction,
  displayListingDetailsSuccessAction,
  displayListingsAction,
  displayListingsFailedAction,
  displayListingsSuccessAction,
  displaySubInfoAction, displaySubInfoFailedAction,
  displaySubInfoSuccessAction
} from './actions';

const initialState: ListingsState = {
  listingsResponse: null,
  listingDetailsResponse: null,
  subInfoResponse: null,
  isLoading: false,
  isOnDetailsPage: false,
  isHeaderError: false,
  isListError: false,
  isDetailsError: false
};

const listingReducer = createReducer(
  initialState,
  on(
    displayListingsAction,
    (state): ListingsState => ({
      ...state,
      isLoading: true,
      isOnDetailsPage: false,
      isListError: false,
      isDetailsError: false,
      listingDetailsResponse: null,
    })
  ),
  on(
    displayListingsSuccessAction,
    (state, action): ListingsState => ({
      ...state,
      isLoading: false,
      isOnDetailsPage: false,
      isListError: false,
      isDetailsError: false,
      listingDetailsResponse: null,
      listingsResponse: action.listingsResponse,
    })
  ),
  on(
    displayListingsFailedAction,
    (state): ListingsState => ({
      ...state,
      isLoading: false,
      isOnDetailsPage: false,
      isListError: true,
      isDetailsError: false,
      listingDetailsResponse: null,
    })
  ),
  on(
    displaySubInfoAction,
    (state): ListingsState => ({
      ...state,
      isLoading: true,
      isListError: false,
      isHeaderError: false,
      isDetailsError: false,
    })
  ),
  on(
    displaySubInfoSuccessAction,
    (state, action): ListingsState => ({
      ...state,
      isLoading: false,
      isHeaderError: false,
      isListError: false,
      isDetailsError: false,
      subInfoResponse: action.subInfoResponse,
    })
  ),
  on(
    displaySubInfoFailedAction,
    (state): ListingsState => ({
      ...state,
      isLoading: false,
      isHeaderError: true,
      isListError: false,
      isDetailsError: false,
    })
  ),
  on(
    displayListingDetailsAction,
    (state): ListingsState => ({
      ...state,
      isLoading: true,
      isOnDetailsPage: true,
      isListError: false,
      isDetailsError: false,
      listingsResponse: null,
    })
  ),
  on(
    displayListingDetailsSuccessAction,
    (state, action): ListingsState => ({
      ...state,
      listingDetailsResponse: action.listingDetailsResponse,
      isLoading: false,
      isOnDetailsPage: true,
      isListError: false,
      isDetailsError: false,
      listingsResponse: null,
    })
  ),

  on(
    displayListingDetailsFailedAction,
    (state): ListingsState => ({
      ...state,
      isLoading: false,
      isOnDetailsPage: true,
      isListError: false,
      isDetailsError: true,
      listingsResponse: null,
    })
  ),
);

export function reducers(state: ListingsState, action: Action): {} {
  return listingReducer(state, action);
}
