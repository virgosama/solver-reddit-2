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
  isDetails: false,
};

const listingReducer = createReducer(
  initialState,
  on(
    displayListingsAction,
    (state): ListingsState => ({
      ...state,
      isLoading: true,
      isDetails: false,
    })
  ),
  on(
    displayListingsSuccessAction,
    (state, action): ListingsState => ({
      ...state,
      isLoading: false,
      isDetails: false,
      listingsResponse: action.listingsResponse,
    })
  ),
  on(
    displayListingsFailedAction,
    (state): ListingsState => ({
      ...state,
      isLoading: false,
      isDetails: false,
    })
  ),
  on(
    displaySubInfoAction,
    (state): ListingsState => ({
      ...state,
      isLoading: true,
      isDetails: false,
    })
  ),
  on(
    displaySubInfoSuccessAction,
    (state, action): ListingsState => ({
      ...state,
      isLoading: false,
      isDetails: false,
      subInfoResponse: action.subInfoResponse,
    })
  ),
  on(
    displaySubInfoFailedAction,
    (state): ListingsState => ({
      ...state,
      isLoading: false,
      isDetails: false,
    })
  ),
  on(
    displayListingDetailsAction,
    (state): ListingsState => ({
      ...state,
      isLoading: true,
      isDetails: true,
    })
  ),
  on(
    displayListingDetailsSuccessAction,
    (state, action): ListingsState => ({
      ...state,
      listingDetailsResponse: action.listingDetailsResponse,
      isLoading: false,
      isDetails: true,
    })
  ),
  on(
    displayListingDetailsFailedAction,
    (state): ListingsState => ({
      ...state,
      isLoading: false,
      isDetails: true,
    })
  ),
);

export function reducers(state: ListingsState, action: Action): {} {
  return listingReducer(state, action);
}
