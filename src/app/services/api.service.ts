import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SubInfo} from '../_models/subInfo';
import {Listings} from '../_models/listings';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://www.reddit.com/r/';
  count = 10;
  limit = 10;

  private sort = new BehaviorSubject('new');
  currentSort = this.sort.asObservable();

  constructor(private http: HttpClient) {
  }

  setApiUrl(value: string): void {
    this.apiUrl += value;
  }

  getApiUrl(): string {
    return this.apiUrl;
  }

  changeSort(selectedSort: string): void {
    this.sort.next(selectedSort);
  }

  getListings(after: string, before: string): Observable<Listings> {
    return this.http.get<Listings>(`${this.apiUrl}/${this.sort.getValue()}.json?limit=${this.limit}&before=${before}&after=${after}&count=${this.count}`)
      .pipe(map((e: any) => e.data));
  }

  getSubInfo(): Observable<SubInfo> {
    return this.http.get<SubInfo>(`${this.apiUrl}/about.json`)
      .pipe(map((e: any) => (
          {
            title: e.data.title,
            publicDescription: e.data.public_description,
            communityIcon: this.parseImg(e.data.community_icon),
            bannerBackgroundImage: this.parseImg(e.data.banner_background_image),
            activeUserCount: e.data.active_user_count,
            subscribers: e.data.subscribers
          }
        )
      ));
  }

  parseImg(imageUrl: string): string {
    let parsedUrl = imageUrl.split('.png');
    if (parsedUrl.length === 1) {
      parsedUrl = imageUrl.split('.jpg');
      return parsedUrl[0] + '.jpg';
    }
    return parsedUrl[0] + '.png';
  }

  getListingDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/comments/${id}.json`);
  }

}
