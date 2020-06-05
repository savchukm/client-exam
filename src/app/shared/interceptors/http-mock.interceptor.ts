import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { API_ENDPOINTS } from '../constants/url.constant';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { Animal } from '../models/animal.model';

@Injectable()
export class HttpMockInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const currentMockData = JSON.parse(this.localStorageService.get('mockData'));
    // Simulating backend work by storing data in browser local storage
    if (req.url === API_ENDPOINTS.ANIMAL_DATA) {
      return of(new HttpResponse(
        { status: 200, body: currentMockData }
      )).pipe(delay(100));
    }
    if (req.url === API_ENDPOINTS.REMOVE_ANIMAL) {
      const updatedMockData = currentMockData.result.filter((a: Animal) => a.eventId !== req.body.eventId);
      this.localStorageService.set('mockData', JSON.stringify({...currentMockData, result: updatedMockData}));
      return of(new HttpResponse(
        { status: 200, body: currentMockData.result.find((a: Animal) => a.eventId === req.body.eventId) }
      )).pipe(delay(100));
    }
    if (req.url === API_ENDPOINTS.SAVE_ANIMAL) {
      const updatedMockData = currentMockData.result.map((a: Animal) => {
        if (a.eventId === req.body.eventId) {
          return req.body;
        }
        return a;
      });
      this.localStorageService.set('mockData', JSON.stringify({...currentMockData, result: updatedMockData}));
      return of(new HttpResponse(
        {status: 200, body: req.body}
      )).pipe(delay(100));
    }
    if (req.url === API_ENDPOINTS.ADD_ANIMAL) {
      const updatedMockData = [...currentMockData.result, req.body];
      this.localStorageService.set('mockData', JSON.stringify({...currentMockData, result: updatedMockData}));
      return of(new HttpResponse(
        { status: 200, body: req.body }
      )).pipe(delay(100));
    }
    next.handle(req);
  }
}
