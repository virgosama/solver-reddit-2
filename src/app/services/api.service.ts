import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SubInfo} from '../_models/subInfo';
import {Listings} from '../_models/listings';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://www.reddit.com/r/cookingforbeginners';
  count = 10;
  limit = 10;

  constructor(private http: HttpClient) {
  }

  getListings(sortBy: string, after: string, before: string): Observable<Listings> {
    return this.http.get<Listings>(`${this.apiUrl}/${sortBy}.json?limit=${this.limit}&before=${before}&after=${after}&count=${this.count}`)
      .pipe(map((e: any) => e.data));
  }

  getSubInfo(): Observable<SubInfo> {
    return this.http.get<SubInfo>(`${this.apiUrl}/about.json`)
      .pipe(map((e: any) => (
          {
            title: e.data.title,
            public_description: e.data.public_description,
            community_icon: this.parseImg(e.data.community_icon),
            banner_background_image: this.parseImg(e.data.banner_background_image)
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
