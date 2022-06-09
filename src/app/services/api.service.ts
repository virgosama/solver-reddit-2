import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://www.reddit.com/r/cookingforbeginners';
  count = 10;
  limit = 10;

  constructor(private http: HttpClient) {
  }

  // best, hot, new, rising, top, sort, controversial

  getListings(sortBy: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${sortBy}.json?limit=${this.limit}`)
      .pipe(map((e: any) => e.data.children));
  }

  // getComments(id: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/comments/${id}.json`);
  // }
  //
  // getNextPage(sortBy: string, after: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/${sortBy}.json?count=${this.count}?after=${after}?limit=${this.limit}`);
  // }
  //
  // getPreviousPage(sortBy: string, before: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/${sortBy}.json?count=${this.count}?before=${before}?limit=${this.limit}`);
  //
  // }
}
