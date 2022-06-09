import {SubInfo} from './subInfo';

export interface ListingsState {
  listingsResponse: any | null;
  listingDetailsResponse: any | null;
  subInfoResponse: SubInfo | null;
  isLoading: boolean | null;
  isDetails: boolean | null;
}
