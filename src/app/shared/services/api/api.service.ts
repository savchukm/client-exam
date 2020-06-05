import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  get(url: string, options?: any): Observable<any> {
    return this.httpClient.get(url, options);
  }

  post(url: string, body?: any, options?: any): Observable<any> {
    return this.httpClient.post(url, body, options);
  }
}
