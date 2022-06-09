import {createAction, props} from '@ngrx/store';

enum ActionTypes {
  DISPLAY_LISTINGS = '[Load] Subreddit Listings',
  DISPLAY_LISTINGS_SUCCESS = '[Load] Subreddit Listings Success',
  DISPLAY_LISTINGS_FAILED = '[Load] Subreddit Listings Failed',
  DISPLAY_LISTING_DETAILS = '[Load] Subreddit Listing Details',
  DISPLAY_LISTING_DETAILS_SUCCESS = '[Load] Subreddit Listing Details Success',
  DISPLAY_LISTING_DETAILS_FAILED = '[Load] Subreddit Listing Details Failed',
  IS_DETAILS_PAGE = '[Check] Is Details Page',
}

export const displayListingsAction = createAction(
  ActionTypes.DISPLAY_LISTINGS,
  props<{sortBy: string}>()
);

export const displayListingsSuccessAction = createAction(
  ActionTypes.DISPLAY_LISTINGS_SUCCESS,
  props<{listingsResponse: any}>()
);

export const displayListingsFailedAction = createAction(
  ActionTypes.DISPLAY_LISTINGS_FAILED,
);

// export const displayListingDetailsAction = createAction(
//   ActionTypes.DISPLAY_LISTING_DETAILS,
//   props<{propertyID: string}>()
// );
//
// export const displayListingDetailsSuccessAction = createAction(
//   ActionTypes.DISPLAY_LISTING_DETAILS_SUCCESS,
//   props<{listingDetailsResponse: any}>()
// );
//
// export const displayListingDetailsFailedAction = createAction(
//   ActionTypes.DISPLAY_LISTING_DETAILS_FAILED,
// );
//
// export const isDetailsPageAction = createAction(
//   ActionTypes.IS_DETAILS_PAGE
// );
