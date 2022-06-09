import {createReducer, on, Action} from '@ngrx/store';
// import {
//   displayListingDetailsAction, displayListingDetailsFailedAction, displayListingDetailsSuccessAction,
//   displayListingsAction, displayListingsFailedAction, displayListingsSuccessAction
// } from './actions';
import {ListingsState} from '../_models/listings-state';
import {displayListingsAction, displayListingsFailedAction, displayListingsSuccessAction} from './actions';

const initialState: ListingsState = {
  listingsResponse: null,
  listingDetailsResponse: null,
  isLoading: false,
  isDetails: false,
};

const mapReducer = createReducer(
  initialState,
  on(
    displayListingsAction,
    (state): ListingsState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    displayListingsSuccessAction,
    (state, action): ListingsState => ({
      ...state,
      isLoading: false,
      listingsResponse: action.listingsResponse,
    })
  ),
  on(
    displayListingsFailedAction,
    (state): ListingsState => ({
      ...state,
      isLoading: false,
    })
  ),
  // on(
  //   displayListingDetailsAction,
  //   (state): ListingsState => ({
  //     ...state,
  //     isLoading: true
  //   })
  // ),
  // on(
  //   displayListingDetailsSuccessAction,
  //   (state, action): ListingsState => ({
  //     ...state,
  //     apartmentDetailsResponse: action.apartmentDetails,
  //     isLoading: false,
  //     isList: false
  //   })
  // ),
  // on(
  //   displayListingDetailsFailedAction,
  //   (state): ListingsState => ({
  //     ...state,
  //     isLoading: false,
  //     isList: true
  //   })
  // ),
);

export function reducers(state: ListingsState, action: Action): {} {
  return mapReducer(state, action);
}
