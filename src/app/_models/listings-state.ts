import {SubInfo} from './subInfo';

export interface ListingsState {
  listingsResponse: any | null;
  listingDetailsResponse: any | null;
  subInfoResponse: SubInfo | null;
  isLoading: boolean | null;
  isOnDetailsPage: boolean | null;
  isHeaderError: boolean | null;
  isListError: boolean | null;
  isDetailsError: boolean | null;
}
