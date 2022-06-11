import {createAction, props} from '@ngrx/store';
import {Listings} from '../_models/listings';
import {SubInfo} from '../_models/subInfo';

enum ActionTypes {
  DISPLAY_LISTINGS = '[Load] Subreddit Listings',
  DISPLAY_LISTINGS_SUCCESS = '[Load] Subreddit Listings Success',
  DISPLAY_LISTINGS_FAILED = '[Load] Subreddit Listings Failed',
  DISPLAY_LISTING_DETAILS = '[Load] Subreddit Listing Details',
  DISPLAY_LISTING_DETAILS_SUCCESS = '[Load] Subreddit Listing Details Success',
  DISPLAY_LISTING_DETAILS_FAILED = '[Load] Subreddit Listing Details Failed',

  DISPLAY_SUBINFO = '[Load] Subreddit Info',
  DISPLAY_SUBINFO_SUCCESS = '[Load] Subreddit Info Success',
  DISPLAY_SUBINFO_FAILED = '[Load] Subreddit Info Failed',
}

export const displayListingsAction = createAction(
  ActionTypes.DISPLAY_LISTINGS,
  props<{sortBy: string, after: string, before: string}>()
);

export const displayListingsSuccessAction = createAction(
  ActionTypes.DISPLAY_LISTINGS_SUCCESS,
  props<{listingsResponse: Listings}>()
);

export const displayListingsFailedAction = createAction(
  ActionTypes.DISPLAY_LISTINGS_FAILED,
);

export const displaySubInfoAction = createAction(
  ActionTypes.DISPLAY_SUBINFO,
);

export const displaySubInfoSuccessAction = createAction(
  ActionTypes.DISPLAY_SUBINFO_SUCCESS,
  props<{subInfoResponse: SubInfo}>()
);

export const displaySubInfoFailedAction = createAction(
  ActionTypes.DISPLAY_SUBINFO_FAILED,
);

export const displayListingDetailsAction = createAction(
  ActionTypes.DISPLAY_LISTING_DETAILS,
  props<{listingID: string}>()
);

export const displayListingDetailsSuccessAction = createAction(
  ActionTypes.DISPLAY_LISTING_DETAILS_SUCCESS,
  props<{listingDetailsResponse: any}>()
);

export const displayListingDetailsFailedAction = createAction(
  ActionTypes.DISPLAY_LISTING_DETAILS_FAILED,
);
